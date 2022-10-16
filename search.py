import csv

reader = csv.DictReader(open('colleges.csv'))

mysat = 1600
mycolleges = []

for college in reader:
    sat25 = sat75 = 0
    i = 0

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

    print(college['Name'], sat)

    if abs(mysat - sat) <= 120:
        mycolleges.append(college['Name'])

print(mycolleges)

