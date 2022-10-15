from flask import Flask
from flask import request

from twilio.twiml.messaging_response import MessagingResponse

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

    if 'hello' in incoming_msg:
        msg.body("Hello there!")
        responded = True
    if not responded:
        msg.body("Sorry, I don't understand what you're saying. Please try again.")
   
    return str(resp)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
