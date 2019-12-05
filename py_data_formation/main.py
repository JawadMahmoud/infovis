import csv

c_list = []
value_list= []
consumption_c= []
year = ' 2014'
death_year = ' 2015'
c_death = []
gauge = {}


series = {'series': [{'name': 'Only government objectives on tobacco control exist', 'data' : []},
                     {'name': 'Only national agency for tobacco control exists', 'data' : []},
                     {'name': 'Both exist', 'data' : []},
                     {'name': 'Neither exist', 'data' : []}
                     ]}

with open('../src/data/total_ncd_death.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            if row[5] != 'Not available' and row[1] == death_year:
                c_death.append(row[0])
                gauge[row[0]]= ({'death' : round(float(row[2]))/10})
                value_list.append({'name':row[0],'value':float(row[5])})

with open('../src/data/control.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            #print(f'\t{row[0]}  {row[1]} {row[2]}.')
            if row[0] in consumption_c and row[1] == year and row[2] == 'Yes' and row[3] == 'No':
                series['series'][0]['data'].append({'name' : row[0], 'value' : 5})
            elif row[0] in consumption_c and row[1] == year and row[2] == 'No' and row[3] == 'Yes':
                series['series'][1]['data'].append({'name': row[0], 'value': 5})
            elif row[0] in consumption_c and row[1] == year and row[2] == 'Yes' and row[3] == 'Yes':
                series['series'][2]['data'].append({'name': row[0], 'value': 5})
            elif row[0] in consumption_c and row[1] == year and row[2] == 'No' and row[3] == 'No':
                series['series'][3]['data'].append({'name': row[0], 'value': 5})

            line_count += 1

for i in series['series']:
    for j in i['data']:
        for elm in value_list:
            if j['name'] == elm['name'] and elm['value'] :
                j['value'] = elm['value']


series2 = {'series': [{'name': 'Do not allow product placement', 'data' : []},
                     {'name': 'Allow product placement', 'data' : []},

                     ]}
with open('../src/data/adult_consumption.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            #print(f'\t{row[0]}  {row[1]} {row[2]}.')


            if row[5] != 'Not available' and row[5] != 'Not applicable' and row[0] in gauge.keys():
                consumption_c.append(row[0])
                gauge[row[0]]['prevalance'] = round(float(row[5]))

            line_count += 1


with open('../src/data/ads.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            #print(f'\t{row[0]}  {row[1]} {row[2]}.')


            if row[0] in consumption_c and row[1] == year and row[6] == 'Yes':
                series2['series'][0]['data'].append({'name' : row[0], 'value' : 5})
            elif row[0] in consumption_c and row[1] == year and row[6] == 'No' :
                series2['series'][1]['data'].append({'name': row[0], 'value': 5})


            line_count += 1

# print (series2)
# has_ban =[]
# no_ban = []
# for i in series2['series'][0]['data']:
#     has_ban.append(i)
# for i in series2['series'][1]['data']:
#     no_ban.append(i)
#
# print (len(has_ban))
# print (len(no_ban))

for i in series2['series']:
    for j in i['data']:
        for elm in value_list:
            if j['name'] == elm['name'] and elm['value'] :
                j['value'] = elm['value']


series_gov_copm = {'series': [{'name': 'Above 70%', 'data' : []},
                              {'name': 'Between 70% and 50%', 'data' : []},
                              {'name': 'Below 50% and Above 20%', 'data' : []},
                              {'name': 'Below 20%', 'data' : []}

                     ]}

with open('../src/data/gov_compliance.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            #print(f'\t{row[0]}  {row[1]} {row[2]}.')


            if row[1] == year and row[2] != 'Not available' and row[2] != 'Not applicable' and int(row[2]) > 7:
                series_gov_copm['series'][0]['data'].append({'name' : row[0], 'value' : int(row[2])*10})
            elif row[1] == year and row[2] != 'Not available' and row[2] != 'Not applicable' and int(row[2]) < 7 and int(row[2]) > 5:
                series_gov_copm['series'][1]['data'].append({'name': row[0], 'value': int(row[2]) * 10})
            elif row[1] == year and row[2] != 'Not available' and row[2] != 'Not applicable' and int(row[2]) < 5 and int(row[2]) > 2:
                series_gov_copm['series'][2]['data'].append({'name': row[0], 'value': int(row[2]) * 10})
            elif row[1] == year and row[2] != 'Not available' and row[2] != 'Not applicable' and int(row[2]) <=2:
                series_gov_copm['series'][3]['data'].append({'name': row[0], 'value': int(row[2]) * 10})




            line_count += 1




with open('../src/data/gov_compliance.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            #print(f'\t{row[0]}  {row[1]} {row[2]}.')


            if row[1] == year and row[2] != 'Not available' and row[2] != 'Not applicable' and int(row[2]) > 7:
                series_gov_copm['series'][0]['data'].append({'name' : row[0], 'value' : int(row[2])*10})

            line_count += 1



with open('../src/data/gov_compliance.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            #print(f'\t{row[0]}  {row[1]} {row[2]}.')


            if row[1] == year and row[2] != 'Not available' and row[2] != 'Not applicable' and row[0] in gauge.keys():
                gauge[row[0]]['compliance'] = int(row[2])*10

            line_count += 1


with open('../src/data/control.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            #print(f'\t{row[0]}  {row[1]} {row[2]}.')
            if row[1] == year and row[0] in gauge.keys():
                gauge[row[0]]['control'] = row[2]

            line_count += 1
# yes_count = 0
# no_count = 0
# for elm in gauge.keys():
#     if gauge[elm]['control'] == 'Yes':
#         yes_count = yes_count +1
#     else:
#         no_count = no_count + 1
# print (yes_count)
# print(no_count)



#
# print (gauge)
