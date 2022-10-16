from flask import Flask
from flask import request

from twilio.twiml.messaging_response import MessagingResponse

import csv

app = Flask(__name__)

@app.route('/')
def home():
    return "College Match"

@app.route('/bot', methods=['POST'])
def bot():
    incoming_msg = request.values.get('Body', '').lower()

    resp = MessagingResponse()
    msg = resp.message()
    
    responded = False

    if "hello" in incoming_msg or "hi" in incoming_msg:
        msg.body("Welcome to College Match 🎓 I’m here to help you find the ideal universities that fit your preferences.\nTo start, what’s your SAT score?")
        responded = True
    elif incoming_msg.isdigit():
        # find matches based on SAT score
        matches = sat_match(int(incoming_msg))
        msg.body("\n".join(matches))
        responded = True
    else:
        msg.body("Sorry, I don't understand what you're saying. Please try again.")
   
    return str(resp)

def sat_match(score):
    reader = csv.DictReader(open('colleges.csv'))

    mysat = score
    mycolleges = []

    # iterate through colleges in CSV
    for college in reader:
        sat25 = sat75 = 0
        i = 0

        # calculate average SAT score for college based on info available
        if college['SAT Critical Reading 25th percentile score'] != '' and college['SAT Critical Reading 75th percentile score'] != '':
            sat25 += int(college['SAT Critical Reading 25th percentile score'])
            sat75 += int(college['SAT Critical Reading 75th percentile score'])
            i += 1
        if college['SAT Writing 25th percentile score'] != '' and college['SAT Writing 75th percentile score'] != '':
            sat25 += int(college['SAT Writing 25th percentile score'])
            sat75 += int(college['SAT Writing 75th percentile score'])
            i += 1
        if college['SAT Math 25th percentile score'] != '' and college['SAT Math 75th percentile score'] != '':
            sat25 += int(college['SAT Math 25th percentile score'])
            sat75 += int(college['SAT Math 75th percentile score'])
            i += 1

        sat = 0

        if i == 3:
            sat = (sat25 + sat75) / 3
        elif i == 2:
            sat = (sat25 + sat75) / 2
        elif i == 1:
            sat = sat25 + sat75

        # add college to list if average SAT matches user's SAT
        if abs(mysat - sat) <= 120:
            mycolleges.append(college['Name'])

        return mycolleges

if __name__ == '__main__':
    app.run(host='0.0.0.0')
