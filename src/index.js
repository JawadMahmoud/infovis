
function government(year) {
    if (year == '2014') {
        s_data = [{'name': 'Only government objectives on tobacco control exist', 'data': [{'name': 'Czechia', 'value': 100.2}, {'name': 'Guatemala', 'value': 46.8}, {'name': 'Mozambique', 'value': 67.0}, {'name': 'Peru', 'value': 116.5}, {'name': 'Vanuatu', 'value': 0.9}]}, {'name': 'Only national agency for tobacco control exists', 'data': [{'name': 'Antigua and Barbuda', 'value': 0.5}, {'name': 'Azerbaijan', 'value': 53.2}, {'name': 'Eswatini', 'value': 4.6}, {'name': 'Haiti', 'value': 51.5}, {'name': 'Niger', 'value': 52.1}, {'name': 'Seychelles', 'value': 0.6}, {'name': 'Somalia', 'value': 39.0}, {'name': 'Ukraine', 'value': 582.5}, {'name': 'Zambia', 'value': 35.4}]}, {'name': 'Both exist', 'data': [{'name': 'Afghanistan', 'value': 105.2}, {'name': 'Albania', 'value': 24.1}, {'name': 'Algeria', 'value': 139.4}, {'name': 'Angola', 'value': 61.0}, {'name': 'Argentina', 'value': 253.3}, {'name': 'Armenia', 'value': 26.0}, {'name': 'Australia', 'value': 142.6}, {'name': 'Austria', 'value': 76.6}, {'name': 'Bahrain', 'value': 2.3}, {'name': 'Bangladesh', 'value': 557.6}, {'name': 'Barbados', 'value': 2.6}, {'name': 'Belarus', 'value': 109.9}, {'name': 'Belgium', 'value': 95.1}, {'name': 'Belize', 'value': 1.3}, {'name': 'Benin', 'value': 34.2}, {'name': 'Bhutan', 'value': 3.2}, {'name': 'Bolivia (Plurinational State of)', 'value': 44.7}, {'name': 'Bosnia and Herzegovina', 'value': 36.0}, {'name': 'Botswana', 'value': 7.0}, {'name': 'Brazil', 'value': 958.3}, {'name': 'Bulgaria', 'value': 100.5}, {'name': 'Burkina Faso', 'value': 50.8}, {'name': 'Burundi', 'value': 29.4}, {'name': 'Cabo Verde', 'value': 2.0}, {'name': 'Cambodia', 'value': 58.0}, {'name': 'Cameroon', 'value': 80.9}, {'name': 'Canada', 'value': 223.9}, {'name': 'Central African Republic', 'value': 15.8}, {'name': 'Chad', 'value': 46.2}, {'name': 'Chile', 'value': 91.0}, {'name': 'China', 'value': 9023.9}, {'name': 'Colombia', 'value': 205.2}, {'name': 'Comoros', 'value': 2.4}, {'name': 'Congo', 'value': 13.1}, {'name': 'Costa Rica', 'value': 19.8}, {'name': "Côte d'Ivoire", 'value': 100.6}, {'name': 'Croatia', 'value': 50.3}, {'name': 'Cuba', 'value': 81.9}, {'name': 'Cyprus', 'value': 7.3}, {'name': "Democratic People's Republic of Korea", 'value': 181.1}, {'name': 'Denmark', 'value': 47.1}, {'name': 'Djibouti', 'value': 3.1}, {'name': 'Ecuador', 'value': 59.5}, {'name': 'Egypt', 'value': 513.2}, {'name': 'El Salvador', 'value': 30.4}, {'name': 'Eritrea', 'value': 15.3}, {'name': 'Estonia', 'value': 14.2}, {'name': 'Ethiopia', 'value': 267.3}, {'name': 'Fiji', 'value': 5.3}, {'name': 'Finland', 'value': 48.9}, {'name': 'France', 'value': 484.6}, {'name': 'Gabon', 'value': 6.1}, {'name': 'Gambia', 'value': 5.2}, {'name': 'Georgia', 'value': 50.8}, {'name': 'Germany', 'value': 843.1}, {'name': 'Ghana', 'value': 91.9}, {'name': 'Greece', 'value': 105.5}, {'name': 'Grenada', 'value': 0.6}, {'name': 'Guinea', 'value': 40.3}, {'name': 'Guyana', 'value': 4.3}, {'name': 'Honduras', 'value': 25.2}, {'name': 'Hungary', 'value': 123.2}, {'name': 'Iceland', 'value': 2.0}, {'name': 'India', 'value': 5828.0}, {'name': 'Indonesia', 'value': 1323.4}, {'name': 'Iran (Islamic Republic of)', 'value': 297.9}, {'name': 'Iraq', 'value': 101.6}, {'name': 'Ireland', 'value': 27.1}, {'name': 'Italy', 'value': 591.7}, {'name': 'Jamaica', 'value': 15.5}, {'name': 'Japan', 'value': 1057.3}, {'name': 'Jordan', 'value': 27.3}, {'name': 'Kazakhstan', 'value': 127.2}, {'name': 'Kenya', 'value': 72.7}, {'name': 'Kiribati', 'value': 0.5}, {'name': 'Kuwait', 'value': 7.5}, {'name': 'Kyrgyzstan', 'value': 29.6}, {'name': "Lao People's Democratic Republic", 'value': 27.3}, {'name': 'Latvia', 'value': 25.9}, {'name': 'Lebanon', 'value': 32.5}, {'name': 'Lesotho', 'value': 9.5}, {'name': 'Liberia', 'value': 10.9}, {'name': 'Libya', 'value': 22.9}, {'name': 'Lithuania', 'value': 37.8}, {'name': 'Luxembourg', 'value': 3.4}, {'name': 'Madagascar', 'value': 65.5}, {'name': 'Malaysia', 'value': 108.9}, {'name': 'Maldives', 'value': 1.1}, {'name': 'Mali', 'value': 54.9}, {'name': 'Malta', 'value': 3.1}, {'name': 'Mauritius', 'value': 8.6}, {'name': 'Mexico', 'value': 516.3}, {'name': 'Micronesia (Federated States of)', 'value': 0.5}, {'name': 'Mongolia', 'value': 14.4}, {'name': 'Montenegro', 'value': 6.1}, {'name': 'Morocco', 'value': 140.0}, {'name': 'Myanmar', 'value': 282.2}, {'name': 'Nepal', 'value': 118.7}, {'name': 'Netherlands', 'value': 131.5}, {'name': 'New Zealand', 'value': 27.2}, {'name': 'Nicaragua', 'value': 21.7}, {'name': 'Nigeria', 'value': 597.3}, {'name': 'Norway', 'value': 35.5}, {'name': 'Oman', 'value': 7.8}, {'name': 'Pakistan', 'value': 787.1}, {'name': 'Panama', 'value': 15.0}, {'name': 'Papua New Guinea', 'value': 30.4}, {'name': 'Paraguay', 'value': 26.3}, {'name': 'Philippines', 'value': 433.6}, {'name': 'Poland', 'value': 357.3}, {'name': 'Portugal', 'value': 91.1}, {'name': 'Qatar', 'value': 2.5}, {'name': 'Republic of Korea', 'value': 219.9}, {'name': 'Republic of Moldova', 'value': 43.5}, {'name': 'Romania', 'value': 241.5}, {'name': 'Russian Federation', 'value': 1633.1}, {'name': 'Saint Lucia', 'value': 1.1}, {'name': 'Samoa', 'value': 0.8}, {'name': 'Sao Tome and Principe', 'value': 0.6}, {'name': 'Saudi Arabia', 'value': 79.8}, {'name': 'Senegal', 'value': 39.0}, {'name': 'Serbia', 'value': 103.1}, {'name': 'Sierra Leone', 'value': 28.3}, {'name': 'Singapore', 'value': 20.6}, {'name': 'Slovakia', 'value': 45.5}, {'name': 'Slovenia', 'value': 17.5}, {'name': 'Solomon Islands', 'value': 1.9}, {'name': 'South Africa', 'value': 263.9}, {'name': 'Spain', 'value': 386.6}, {'name': 'Sri Lanka', 'value': 115.2}, {'name': 'Sudan', 'value': 142.0}, {'name': 'Suriname', 'value': 3.0}, {'name': 'Sweden', 'value': 81.1}, {'name': 'Switzerland', 'value': 60.7}, {'name': 'Syrian Arab Republic', 'value': 66.8}, {'name': 'Thailand', 'value': 388.1}, {'name': 'Republic of North Macedonia', 'value': 18.9}, {'name': 'Timor-Leste', 'value': 3.1}, {'name': 'Togo', 'value': 23.4}, {'name': 'Tonga', 'value': 0.5}, {'name': 'Trinidad and Tobago', 'value': 9.6}, {'name': 'Tunisia', 'value': 60.8}, {'name': 'Turkey', 'value': 396.0}, {'name': 'Turkmenistan', 'value': 30.2}, {'name': 'Uganda', 'value': 94.4}, {'name': 'United Arab Emirates', 'value': 11.0}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 534.1}, {'name': 'United Republic of Tanzania', 'value': 130.0}, {'name': 'United States of America', 'value': 2415.9}, {'name': 'Uruguay', 'value': 28.2}, {'name': 'Uzbekistan', 'value': 140.5}, {'name': 'Venezuela (Bolivarian Republic of)', 'value': 121.9}, {'name': 'Viet Nam', 'value': 413.8}, {'name': 'Yemen', 'value': 95.1}, {'name': 'Zimbabwe', 'value': 41.8}]}, {'name': 'Neither exist', 'data': [{'name': 'Bahamas', 'value': 1.7}, {'name': 'Democratic Republic of the Congo', 'value': 199.6}, {'name': 'Dominican Republic', 'value': 46.1}, {'name': 'Equatorial Guinea', 'value': 4.0}, {'name': 'Guinea-Bissau', 'value': 4.7}, {'name': 'Malawi', 'value': 37.2}, {'name': 'Mauritania', 'value': 11.5}, {'name': 'Namibia', 'value': 7.6}, {'name': 'Rwanda', 'value': 28.3}, {'name': 'Saint Vincent and the Grenadines', 'value': 0.7}]}]
    }else if (year == '2008'){
        s_data = [{'name': 'Only government objectives on tobacco control exist', 'data': [{'name': 'Bahrain', 'value': 2.1}, {'name': 'Czechia', 'value': 96.3}, {'name': 'Italy', 'value': 541.8}, {'name': 'Lithuania', 'value': 37.6}, {'name': 'Mauritius', 'value': 7.9}, {'name': 'Mozambique', 'value': 63.5}, {'name': 'Poland', 'value': 341.5}, {'name': 'Saint Lucia', 'value': 1.0}, {'name': 'Vanuatu', 'value': 0.8}]}, {'name': 'Only national agency for tobacco control exists', 'data': [{'name': 'Afghanistan', 'value': 92.3}, {'name': 'Angola', 'value': 55.7}, {'name': 'Barbados', 'value': 2.5}, {'name': 'Brunei Darussalam', 'value': 1.0}, {'name': 'Burkina Faso', 'value': 44.2}, {'name': 'Central African Republic', 'value': 16.5}, {'name': 'Colombia', 'value': 182.9}, {'name': 'Croatia', 'value': 48.4}, {'name': 'Eswatini', 'value': 4.1}, {'name': 'Ethiopia', 'value': 235.2}, {'name': 'Gabon', 'value': 5.4}, {'name': 'Gambia', 'value': 4.6}, {'name': 'Grenada', 'value': 0.7}, {'name': 'Guatemala', 'value': 40.3}, {'name': 'Guyana', 'value': 3.8}, {'name': 'Haiti', 'value': 40.5}, {'name': 'Honduras', 'value': 21.3}, {'name': 'Lebanon', 'value': 23.6}, {'name': 'Malaysia', 'value': 93.6}, {'name': 'Maldives', 'value': 1.0}, {'name': 'Malta', 'value': 2.9}, {'name': 'Niger', 'value': 45.3}, {'name': 'Republic of Moldova', 'value': 45.4}, {'name': 'Romania', 'value': 239.3}, {'name': 'Seychelles', 'value': 0.6}, {'name': 'Somalia', 'value': 33.2}, {'name': 'Zambia', 'value': 32.7}]}, {'name': 'Both exist', 'data': [{'name': 'Albania', 'value': 21.0}, {'name': 'Algeria', 'value': 119.7}, {'name': 'Argentina', 'value': 255.5}, {'name': 'Armenia', 'value': 25.8}, {'name': 'Australia', 'value': 129.8}, {'name': 'Bangladesh', 'value': 503.0}, {'name': 'Belarus', 'value': 126.9}, {'name': 'Belgium', 'value': 91.1}, {'name': 'Belize', 'value': 1.2}, {'name': 'Benin', 'value': 29.7}, {'name': 'Bhutan', 'value': 2.8}, {'name': 'Bolivia (Plurinational State of)', 'value': 41.4}, {'name': 'Bosnia and Herzegovina', 'value': 35.2}, {'name': 'Botswana', 'value': 6.3}, {'name': 'Brazil', 'value': 887.0}, {'name': 'Bulgaria', 'value': 104.5}, {'name': 'Cabo Verde', 'value': 2.0}, {'name': 'Cambodia', 'value': 51.1}, {'name': 'Cameroon', 'value': 71.3}, {'name': 'Canada', 'value': 213.1}, {'name': 'Chad', 'value': 40.0}, {'name': 'Chile', 'value': 83.6}, {'name': 'China', 'value': 8001.3}, {'name': 'Comoros', 'value': 2.1}, {'name': 'Costa Rica', 'value': 17.8}, {'name': "Côte d'Ivoire", 'value': 84.7}, {'name': 'Cuba', 'value': 77.5}, {'name': "Democratic People's Republic of Korea", 'value': 166.1}, {'name': 'Democratic Republic of the Congo', 'value': 169.5}, {'name': 'Denmark', 'value': 48.6}, {'name': 'Djibouti', 'value': 2.6}, {'name': 'Ecuador', 'value': 50.2}, {'name': 'Egypt', 'value': 441.2}, {'name': 'El Salvador', 'value': 27.4}, {'name': 'Eritrea', 'value': 14.3}, {'name': 'Estonia', 'value': 14.5}, {'name': 'Fiji', 'value': 4.7}, {'name': 'Finland', 'value': 46.6}, {'name': 'France', 'value': 472.6}, {'name': 'Georgia', 'value': 49.5}, {'name': 'Germany', 'value': 786.7}, {'name': 'Ghana', 'value': 82.4}, {'name': 'Guinea', 'value': 37.4}, {'name': 'Hungary', 'value': 121.5}, {'name': 'Iceland', 'value': 1.8}, {'name': 'India', 'value': 5171.4}, {'name': 'Indonesia', 'value': 1181.8}, {'name': 'Iran (Islamic Republic of)', 'value': 289.4}, {'name': 'Iraq', 'value': 88.8}, {'name': 'Ireland', 'value': 24.1}, {'name': 'Jamaica', 'value': 14.6}, {'name': 'Japan', 'value': 966.2}, {'name': 'Jordan', 'value': 21.1}, {'name': 'Kazakhstan', 'value': 133.1}, {'name': 'Kenya', 'value': 62.6}, {'name': 'Kuwait', 'value': 5.7}, {'name': 'Kyrgyzstan', 'value': 29.4}, {'name': "Lao People's Democratic Republic", 'value': 24.7}, {'name': 'Latvia', 'value': 27.5}, {'name': 'Lesotho', 'value': 9.1}, {'name': 'Madagascar', 'value': 60.2}, {'name': 'Mali', 'value': 50.7}, {'name': 'Mexico', 'value': 449.0}, {'name': 'Micronesia (Federated States of)', 'value': 0.5}, {'name': 'Mongolia', 'value': 13.3}, {'name': 'Morocco', 'value': 127.6}, {'name': 'Myanmar', 'value': 254.2}, {'name': 'Nepal', 'value': 105.9}, {'name': 'Netherlands', 'value': 121.7}, {'name': 'New Zealand', 'value': 25.8}, {'name': 'Nicaragua', 'value': 19.4}, {'name': 'Nigeria', 'value': 536.3}, {'name': 'Norway', 'value': 36.4}, {'name': 'Oman', 'value': 6.2}, {'name': 'Pakistan', 'value': 701.3}, {'name': 'Panama', 'value': 12.8}, {'name': 'Papua New Guinea', 'value': 23.9}, {'name': 'Paraguay', 'value': 23.3}, {'name': 'Philippines', 'value': 389.6}, {'name': 'Portugal', 'value': 92.1}, {'name': 'Qatar', 'value': 1.8}, {'name': 'Republic of Korea', 'value': 204.3}, {'name': 'Russian Federation', 'value': 1754.0}, {'name': 'Samoa', 'value': 0.7}, {'name': 'Saudi Arabia', 'value': 68.6}, {'name': 'Senegal', 'value': 37.3}, {'name': 'Serbia', 'value': 103.4}, {'name': 'Singapore', 'value': 17.8}, {'name': 'Slovakia', 'value': 47.9}, {'name': 'Slovenia', 'value': 16.4}, {'name': 'Solomon Islands', 'value': 1.7}, {'name': 'South Africa', 'value': 239.4}, {'name': 'Spain', 'value': 351.8}, {'name': 'Sri Lanka', 'value': 101.4}, {'name': 'Sudan', 'value': 125.8}, {'name': 'Suriname', 'value': 2.7}, {'name': 'Sweden', 'value': 82.1}, {'name': 'Switzerland', 'value': 56.9}, {'name': 'Syrian Arab Republic', 'value': 64.9}, {'name': 'Thailand', 'value': 348.4}, {'name': 'Republic of North Macedonia', 'value': 18.2}, {'name': 'Timor-Leste', 'value': 3.1}, {'name': 'Togo', 'value': 20.8}, {'name': 'Tonga', 'value': 0.5}, {'name': 'Tunisia', 'value': 55.8}, {'name': 'Turkey', 'value': 364.4}, {'name': 'Turkmenistan', 'value': 25.5}, {'name': 'Uganda', 'value': 82.0}, {'name': 'Ukraine', 'value': 652.9}, {'name': 'United Arab Emirates', 'value': 8.5}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 501.8}, {'name': 'United States of America', 'value': 2183.9}, {'name': 'Uruguay', 'value': 27.9}, {'name': 'Venezuela (Bolivarian Republic of)', 'value': 105.1}, {'name': 'Viet Nam', 'value': 371.6}, {'name': 'Yemen', 'value': 85.5}, {'name': 'Zimbabwe', 'value': 40.7}]}, {'name': 'Neither exist', 'data': [{'name': 'Antigua and Barbuda', 'value': 0.4}, {'name': 'Austria', 'value': 71.1}, {'name': 'Azerbaijan', 'value': 49.9}, {'name': 'Bahamas', 'value': 1.5}, {'name': 'Burundi', 'value': 25.7}, {'name': 'Congo', 'value': 12.5}, {'name': 'Dominican Republic', 'value': 40.1}, {'name': 'Equatorial Guinea', 'value': 3.5}, {'name': 'Greece', 'value': 99.5}, {'name': 'Guinea-Bissau', 'value': 4.5}, {'name': 'Liberia', 'value': 10.0}, {'name': 'Libya', 'value': 22.0}, {'name': 'Malawi', 'value': 33.6}, {'name': 'Mauritania', 'value': 9.7}, {'name': 'Namibia', 'value': 7.0}, {'name': 'Peru', 'value': 103.4}, {'name': 'Rwanda', 'value': 25.9}, {'name': 'Saint Vincent and the Grenadines', 'value': 0.6}, {'name': 'Sao Tome and Principe', 'value': 0.6}, {'name': 'Sierra Leone', 'value': 26.5}, {'name': 'Trinidad and Tobago', 'value': 9.1}, {'name': 'United Republic of Tanzania', 'value': 110.6}, {'name': 'Uzbekistan', 'value': 128.8}]}]
    }

    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '100%'
        },
        title: {
            text: 'Tobacco control programs by country (' + year +')'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}'
        },
        plotOptions: {
            packedbubble: {
                minSize: '5%',
                maxSize: '100%',
                zMin: 0,
                zMax: 500,
                layoutAlgorithm: {
                    gravitationalConstant: 0.05,
                    splitSeries: true,
                    seriesInteraction: false,
                    dragBetweenSeries: false,
                    parentNodeLimit: true
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 200
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
    series: s_data

    });
}


function governmentComp(year) {
    if (year == '2014') {
        s_data = [{'name': 'Above 70%', 'data': [{'name': 'Andorra', 'value': 100}, {'name': 'Australia', 'value': 80}, {'name': 'Belgium', 'value': 80}, {'name': 'Bhutan', 'value': 100}, {'name': 'Brazil', 'value': 100}, {'name': 'Canada', 'value': 100}, {'name': 'Chile', 'value': 100}, {'name': 'Costa Rica', 'value': 100}, {'name': 'Cyprus', 'value': 80}, {'name': 'Denmark', 'value': 80}, {'name': 'Finland', 'value': 100}, {'name': 'France', 'value': 90}, {'name': 'Hungary', 'value': 100}, {'name': 'Iceland', 'value': 100}, {'name': 'Ireland', 'value': 100}, {'name': 'Kiribati', 'value': 80}, {'name': 'Latvia', 'value': 80}, {'name': 'Luxembourg', 'value': 100}, {'name': 'Mongolia', 'value': 80}, {'name': 'Nepal', 'value': 80}, {'name': 'Norway', 'value': 100}, {'name': 'Palau', 'value': 80}, {'name': 'Panama', 'value': 100}, {'name': 'Peru', 'value': 80}, {'name': 'Poland', 'value': 80}, {'name': 'Russian Federation', 'value': 80}, {'name': 'San Marino', 'value': 100}, {'name': 'Saudi Arabia', 'value': 80}, {'name': 'Seychelles', 'value': 100}, {'name': 'Slovenia', 'value': 80}, {'name': 'Spain', 'value': 100}, {'name': 'Togo', 'value': 100}, {'name': 'Trinidad and Tobago', 'value': 100}, {'name': 'Turkey', 'value': 100}, {'name': 'Turkmenistan', 'value': 90}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 100}, {'name': 'Uruguay', 'value': 100}, {'name': 'Zimbabwe', 'value': 100}]}, {'name': 'Between 70% and 50%', 'data': [{'name': 'Argentina', 'value': 60}, {'name': 'Austria', 'value': 60}, {'name': 'Chad', 'value': 60}, {'name': 'Croatia', 'value': 60}, {'name': 'Fiji', 'value': 60}, {'name': 'Honduras', 'value': 60}, {'name': 'India', 'value': 60}, {'name': 'Iran (Islamic Republic of)', 'value': 60}, {'name': 'Kazakhstan', 'value': 60}, {'name': 'Madagascar', 'value': 60}, {'name': 'Mauritius', 'value': 60}, {'name': 'Morocco', 'value': 60}, {'name': 'Samoa', 'value': 60}, {'name': 'Tuvalu', 'value': 60}]}, {'name': 'Below 50% and Above 20%', 'data': [{'name': 'Azerbaijan', 'value': 30}, {'name': 'Benin', 'value': 40}, {'name': 'Bolivia (Plurinational State of)', 'value': 30}, {'name': 'Burkina Faso', 'value': 40}, {'name': 'China', 'value': 40}, {'name': 'Greece', 'value': 30}, {'name': 'Guatemala', 'value': 30}, {'name': 'Guinea', 'value': 30}, {'name': 'Guyana', 'value': 40}, {'name': 'Jordan', 'value': 30}, {'name': 'Libya', 'value': 40}, {'name': 'Maldives', 'value': 40}, {'name': 'Mexico', 'value': 30}, {'name': 'Myanmar', 'value': 40}, {'name': 'Namibia', 'value': 30}, {'name': 'Papua New Guinea', 'value': 30}, {'name': 'Portugal', 'value': 30}, {'name': 'Republic of Moldova', 'value': 30}, {'name': 'Senegal', 'value': 30}, {'name': 'Serbia', 'value': 40}, {'name': 'Uganda', 'value': 40}, {'name': 'Ukraine', 'value': 30}, {'name': 'Uzbekistan', 'value': 40}, {'name': 'Viet Nam', 'value': 40}, {'name': 'Yemen', 'value': 40}, {'name': 'Zambia', 'value': 30}]}, {'name': 'Below 20%', 'data': [{'name': 'Afghanistan', 'value': 20}, {'name': 'Albania', 'value': 0}, {'name': 'Algeria', 'value': 20}, {'name': 'Georgia', 'value': 0}, {'name': 'Indonesia', 'value': 10}, {'name': 'Iraq', 'value': 20}, {'name': 'Lesotho', 'value': 20}, {'name': 'Mauritania', 'value': 0}, {'name': 'Montenegro', 'value': 20}, {'name': 'Nicaragua', 'value': 10}, {'name': 'Niger', 'value': 0}, {'name': 'Nigeria', 'value': 0}, {'name': 'Pakistan', 'value': 10}, {'name': 'Romania', 'value': 0}, {'name': 'Solomon Islands', 'value': 20}, {'name': 'Timor-Leste', 'value': 0}]}]
    }else if (year == '2010'){
        s_data = [{'name': 'Above 70%', 'data': [{'name': 'Canada', 'value': 100}, {'name': 'Costa Rica', 'value': 80}, {'name': 'Cyprus', 'value': 80}, {'name': 'Dominican Republic', 'value': 80}, {'name': 'Finland', 'value': 100}, {'name': 'Germany', 'value': 80}, {'name': 'Iceland', 'value': 100}, {'name': 'Iran (Islamic Republic of)', 'value': 80}, {'name': 'Ireland', 'value': 100}, {'name': 'Israel', 'value': 80}, {'name': 'Latvia', 'value': 80}, {'name': 'Lithuania', 'value': 80}, {'name': 'Monaco', 'value': 80}, {'name': 'Norway', 'value': 100}, {'name': 'Palau', 'value': 80}, {'name': 'Panama', 'value': 90}, {'name': 'Paraguay', 'value': 100}, {'name': 'San Marino', 'value': 100}, {'name': 'Serbia', 'value': 100}, {'name': 'Seychelles', 'value': 100}, {'name': 'Singapore', 'value': 80}, {'name': 'Spain', 'value': 80}, {'name': 'Thailand', 'value': 80}, {'name': 'Turkey', 'value': 80}, {'name': 'Turkmenistan', 'value': 100}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 100}, {'name': 'Uruguay', 'value': 100}, {'name': 'Venezuela (Bolivarian Republic of)', 'value': 90}]}, {'name': 'Between 70% and 50%', 'data': [{'name': 'Benin', 'value': 60}, {'name': 'Brazil', 'value': 60}, {'name': 'Cabo Verde', 'value': 60}, {'name': 'Colombia', 'value': 60}, {'name': 'Estonia', 'value': 60}, {'name': 'Uganda', 'value': 60}]}, {'name': 'Below 50% and Above 20%', 'data': [{'name': 'Armenia', 'value': 30}, {'name': 'Bangladesh', 'value': 30}, {'name': 'Comoros', 'value': 30}, {'name': 'Guinea', 'value': 30}, {'name': 'Kazakhstan', 'value': 40}, {'name': 'Libya', 'value': 30}, {'name': 'Mexico', 'value': 40}, {'name': 'Mongolia', 'value': 30}, {'name': 'Montenegro', 'value': 40}, {'name': 'Niger', 'value': 30}, {'name': 'Philippines', 'value': 40}, {'name': 'Republic of Moldova', 'value': 30}, {'name': 'Somalia', 'value': 40}, {'name': 'Viet Nam', 'value': 30}, {'name': 'Zambia', 'value': 30}]}, {'name': 'Below 20%', 'data': [{'name': 'Albania', 'value': 0}, {'name': 'Algeria', 'value': 10}, {'name': 'Azerbaijan', 'value': 0}, {'name': 'Cameroon', 'value': 20}, {'name': 'Chad', 'value': 0}, {'name': 'China', 'value': 20}, {'name': "Côte d'Ivoire", 'value': 0}, {'name': 'Cuba', 'value': 0}, {'name': 'Egypt', 'value': 20}, {'name': 'El Salvador', 'value': 10}, {'name': 'Guyana', 'value': 20}, {'name': 'Indonesia', 'value': 10}, {'name': 'Lebanon', 'value': 20}, {'name': 'Mauritania', 'value': 20}, {'name': 'Myanmar', 'value': 20}, {'name': 'Pakistan', 'value': 10}, {'name': 'Poland', 'value': 20}, {'name': 'Senegal', 'value': 0}, {'name': 'Zimbabwe', 'value': 20}]}]
    }

    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '100%'
        },
        title: {
            text: 'Tobacco compliance by country (' + year +')'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}'
        },
        plotOptions: {
            packedbubble: {
                minSize: '5%',
                maxSize: '100%',
                zMin: 0,
                zMax: 250,
                layoutAlgorithm: {
                    gravitationalConstant: 0.05,
                    splitSeries: true,
                    seriesInteraction: false,
                    dragBetweenSeries: false,
                    parentNodeLimit: true
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 10
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
    series: s_data

    });
}


function advertisers(year) {
    if (year == '2014') {
        s_data = [{'name': 'Do not allow product placement', 'data': [{'name': 'Afghanistan', 'value': 105.2}, {'name': 'Albania', 'value': 24.1}, {'name': 'Argentina', 'value': 253.3}, {'name': 'Australia', 'value': 142.6}, {'name': 'Austria', 'value': 76.6}, {'name': 'Azerbaijan', 'value': 53.2}, {'name': 'Bahrain', 'value': 2.3}, {'name': 'Belgium', 'value': 95.1}, {'name': 'Bosnia and Herzegovina', 'value': 36.0}, {'name': 'Botswana', 'value': 7.0}, {'name': 'Brazil', 'value': 958.3}, {'name': 'Brunei Darussalam', 'value': 1.3}, {'name': 'Bulgaria', 'value': 100.5}, {'name': 'Burkina Faso', 'value': 50.8}, {'name': 'Canada', 'value': 223.9}, {'name': 'Chad', 'value': 46.2}, {'name': 'Chile', 'value': 91.0}, {'name': 'China', 'value': 9023.9}, {'name': 'Colombia', 'value': 205.2}, {'name': 'Costa Rica', 'value': 19.8}, {'name': 'Croatia', 'value': 50.3}, {'name': 'Cyprus', 'value': 7.3}, {'name': 'Czechia', 'value': 100.2}, {'name': 'Denmark', 'value': 47.1}, {'name': 'Djibouti', 'value': 3.1}, {'name': 'Ecuador', 'value': 59.5}, {'name': 'Egypt', 'value': 513.2}, {'name': 'El Salvador', 'value': 30.4}, {'name': 'Eritrea', 'value': 15.3}, {'name': 'Eswatini', 'value': 4.6}, {'name': 'Fiji', 'value': 5.3}, {'name': 'Finland', 'value': 48.9}, {'name': 'France', 'value': 484.6}, {'name': 'Gambia', 'value': 5.2}, {'name': 'Georgia', 'value': 50.8}, {'name': 'Germany', 'value': 843.1}, {'name': 'Ghana', 'value': 91.9}, {'name': 'Greece', 'value': 105.5}, {'name': 'Guinea', 'value': 40.3}, {'name': 'Hungary', 'value': 123.2}, {'name': 'Iceland', 'value': 2.0}, {'name': 'India', 'value': 5828.0}, {'name': 'Iran (Islamic Republic of)', 'value': 297.9}, {'name': 'Iraq', 'value': 101.6}, {'name': 'Israel', 'value': 38.0}, {'name': 'Italy', 'value': 591.7}, {'name': 'Kazakhstan', 'value': 127.2}, {'name': 'Kenya', 'value': 72.7}, {'name': 'Kiribati', 'value': 0.5}, {'name': 'Kuwait', 'value': 7.5}, {'name': 'Kyrgyzstan', 'value': 29.6}, {'name': 'Latvia', 'value': 25.9}, {'name': 'Lebanon', 'value': 32.5}, {'name': 'Libya', 'value': 22.9}, {'name': 'Lithuania', 'value': 37.8}, {'name': 'Luxembourg', 'value': 3.4}, {'name': 'Madagascar', 'value': 65.5}, {'name': 'Malaysia', 'value': 108.9}, {'name': 'Maldives', 'value': 1.1}, {'name': 'Mali', 'value': 54.9}, {'name': 'Malta', 'value': 3.1}, {'name': 'Mauritius', 'value': 8.6}, {'name': 'Mongolia', 'value': 14.4}, {'name': 'Montenegro', 'value': 6.1}, {'name': 'Morocco', 'value': 140.0}, {'name': 'Namibia', 'value': 7.6}, {'name': 'Nepal', 'value': 118.7}, {'name': 'Netherlands', 'value': 131.5}, {'name': 'New Zealand', 'value': 27.2}, {'name': 'Niger', 'value': 52.1}, {'name': 'Norway', 'value': 35.5}, {'name': 'Pakistan', 'value': 787.1}, {'name': 'Panama', 'value': 15.0}, {'name': 'Philippines', 'value': 433.6}, {'name': 'Poland', 'value': 357.3}, {'name': 'Portugal', 'value': 91.1}, {'name': 'Qatar', 'value': 2.5}, {'name': 'Republic of Moldova', 'value': 43.5}, {'name': 'Romania', 'value': 241.5}, {'name': 'Russian Federation', 'value': 1633.1}, {'name': 'Serbia', 'value': 103.1}, {'name': 'Seychelles', 'value': 0.6}, {'name': 'Slovenia', 'value': 17.5}, {'name': 'Solomon Islands', 'value': 1.9}, {'name': 'South Africa', 'value': 263.9}, {'name': 'Spain', 'value': 386.6}, {'name': 'Sri Lanka', 'value': 115.2}, {'name': 'Sudan', 'value': 142.0}, {'name': 'Suriname', 'value': 3.0}, {'name': 'Sweden', 'value': 81.1}, {'name': 'Syrian Arab Republic', 'value': 66.8}, {'name': 'Thailand', 'value': 388.1}, {'name': 'Republic of North Macedonia', 'value': 18.9}, {'name': 'Togo', 'value': 23.4}, {'name': 'Trinidad and Tobago', 'value': 9.6}, {'name': 'Tunisia', 'value': 60.8}, {'name': 'Turkey', 'value': 396.0}, {'name': 'United Arab Emirates', 'value': 11.0}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 534.1}, {'name': 'United Republic of Tanzania', 'value': 130.0}, {'name': 'Uruguay', 'value': 28.2}, {'name': 'Vanuatu', 'value': 0.9}, {'name': 'Viet Nam', 'value': 413.8}, {'name': 'Yemen', 'value': 95.1}]}, {'name': 'Allow product placement', 'data': [{'name': 'Algeria', 'value': 139.4}, {'name': 'Angola', 'value': 61.0}, {'name': 'Antigua and Barbuda', 'value': 0.5}, {'name': 'Armenia', 'value': 26.0}, {'name': 'Bahamas', 'value': 1.7}, {'name': 'Bangladesh', 'value': 557.6}, {'name': 'Barbados', 'value': 2.6}, {'name': 'Belarus', 'value': 109.9}, {'name': 'Belize', 'value': 1.3}, {'name': 'Benin', 'value': 34.2}, {'name': 'Bhutan', 'value': 3.2}, {'name': 'Bolivia (Plurinational State of)', 'value': 44.7}, {'name': 'Burundi', 'value': 29.4}, {'name': 'Cabo Verde', 'value': 2.0}, {'name': 'Cambodia', 'value': 58.0}, {'name': 'Cameroon', 'value': 80.9}, {'name': 'Central African Republic', 'value': 15.8}, {'name': 'Comoros', 'value': 2.4}, {'name': 'Congo', 'value': 13.1}, {'name': "Côte d'Ivoire", 'value': 100.6}, {'name': 'Cuba', 'value': 81.9}, {'name': "Democratic People's Republic of Korea", 'value': 181.1}, {'name': 'Democratic Republic of the Congo', 'value': 199.6}, {'name': 'Dominican Republic', 'value': 46.1}, {'name': 'Equatorial Guinea', 'value': 4.0}, {'name': 'Estonia', 'value': 14.2}, {'name': 'Ethiopia', 'value': 267.3}, {'name': 'Gabon', 'value': 6.1}, {'name': 'Grenada', 'value': 0.6}, {'name': 'Guatemala', 'value': 46.8}, {'name': 'Guinea-Bissau', 'value': 4.7}, {'name': 'Guyana', 'value': 4.3}, {'name': 'Haiti', 'value': 51.5}, {'name': 'Honduras', 'value': 25.2}, {'name': 'Indonesia', 'value': 1323.4}, {'name': 'Ireland', 'value': 27.1}, {'name': 'Jamaica', 'value': 15.5}, {'name': 'Japan', 'value': 1057.3}, {'name': 'Jordan', 'value': 27.3}, {'name': "Lao People's Democratic Republic", 'value': 27.3}, {'name': 'Lesotho', 'value': 9.5}, {'name': 'Liberia', 'value': 10.9}, {'name': 'Malawi', 'value': 37.2}, {'name': 'Mauritania', 'value': 11.5}, {'name': 'Mexico', 'value': 516.3}, {'name': 'Micronesia (Federated States of)', 'value': 0.5}, {'name': 'Mozambique', 'value': 67.0}, {'name': 'Myanmar', 'value': 282.2}, {'name': 'Nicaragua', 'value': 21.7}, {'name': 'Nigeria', 'value': 597.3}, {'name': 'Oman', 'value': 7.8}, {'name': 'Papua New Guinea', 'value': 30.4}, {'name': 'Paraguay', 'value': 26.3}, {'name': 'Peru', 'value': 116.5}, {'name': 'Republic of Korea', 'value': 219.9}, {'name': 'Rwanda', 'value': 28.3}, {'name': 'Saint Lucia', 'value': 1.1}, {'name': 'Saint Vincent and the Grenadines', 'value': 0.7}, {'name': 'Samoa', 'value': 0.8}, {'name': 'Sao Tome and Principe', 'value': 0.6}, {'name': 'Saudi Arabia', 'value': 79.8}, {'name': 'Senegal', 'value': 39.0}, {'name': 'Sierra Leone', 'value': 28.3}, {'name': 'Singapore', 'value': 20.6}, {'name': 'Slovakia', 'value': 45.5}, {'name': 'Somalia', 'value': 39.0}, {'name': 'South Sudan', 'value': 31.6}, {'name': 'Switzerland', 'value': 60.7}, {'name': 'Tajikistan', 'value': 31.0}, {'name': 'Timor-Leste', 'value': 3.1}, {'name': 'Tonga', 'value': 0.5}, {'name': 'Turkmenistan', 'value': 30.2}, {'name': 'Uganda', 'value': 94.4}, {'name': 'Ukraine', 'value': 582.5}, {'name': 'United States of America', 'value': 2415.9}, {'name': 'Uzbekistan', 'value': 140.5}, {'name': 'Venezuela (Bolivarian Republic of)', 'value': 121.9}, {'name': 'Zambia', 'value': 35.4}, {'name': 'Zimbabwe', 'value': 41.8}]}]
    } else if (year == '2007'){
        s_data = [{'name': 'Do not allow product placement', 'data': [{'name': 'Afghanistan', 'value': 92.3}, {'name': 'Albania', 'value': 21.0}, {'name': 'Australia', 'value': 129.8}, {'name': 'Azerbaijan', 'value': 49.9}, {'name': 'Belgium', 'value': 91.1}, {'name': 'Bosnia and Herzegovina', 'value': 35.2}, {'name': 'Botswana', 'value': 6.3}, {'name': 'Brazil', 'value': 887.0}, {'name': 'Brunei Darussalam', 'value': 1.0}, {'name': 'Bulgaria', 'value': 104.5}, {'name': 'Canada', 'value': 213.1}, {'name': 'Chile', 'value': 83.6}, {'name': 'China', 'value': 8001.3}, {'name': 'Denmark', 'value': 48.6}, {'name': 'Djibouti', 'value': 2.6}, {'name': 'Egypt', 'value': 441.2}, {'name': 'Eritrea', 'value': 14.3}, {'name': 'Finland', 'value': 46.6}, {'name': 'France', 'value': 472.6}, {'name': 'Gambia', 'value': 4.6}, {'name': 'Georgia', 'value': 49.5}, {'name': 'Greece', 'value': 99.5}, {'name': 'Guinea', 'value': 37.4}, {'name': 'Hungary', 'value': 121.5}, {'name': 'Iceland', 'value': 1.8}, {'name': 'India', 'value': 5171.4}, {'name': 'Iran (Islamic Republic of)', 'value': 289.4}, {'name': 'Iraq', 'value': 88.8}, {'name': 'Israel', 'value': 34.4}, {'name': 'Kazakhstan', 'value': 133.1}, {'name': 'Kenya', 'value': 62.6}, {'name': 'Kuwait', 'value': 5.7}, {'name': 'Lithuania', 'value': 37.6}, {'name': 'Madagascar', 'value': 60.2}, {'name': 'Malaysia', 'value': 93.6}, {'name': 'Malta', 'value': 2.9}, {'name': 'Mongolia', 'value': 13.3}, {'name': 'Montenegro', 'value': 5.8}, {'name': 'Morocco', 'value': 127.6}, {'name': 'New Zealand', 'value': 25.8}, {'name': 'Niger', 'value': 45.3}, {'name': 'Norway', 'value': 36.4}, {'name': 'Pakistan', 'value': 701.3}, {'name': 'Philippines', 'value': 389.6}, {'name': 'Portugal', 'value': 92.1}, {'name': 'Qatar', 'value': 1.8}, {'name': 'Republic of Moldova', 'value': 45.4}, {'name': 'Romania', 'value': 239.3}, {'name': 'Russian Federation', 'value': 1754.0}, {'name': 'Serbia', 'value': 103.4}, {'name': 'Slovenia', 'value': 16.4}, {'name': 'Sri Lanka', 'value': 101.4}, {'name': 'Sudan', 'value': 125.8}, {'name': 'Sweden', 'value': 82.1}, {'name': 'Thailand', 'value': 348.4}, {'name': 'Republic of North Macedonia', 'value': 18.2}, {'name': 'Tunisia', 'value': 55.8}, {'name': 'Turkey', 'value': 364.4}, {'name': 'United Arab Emirates', 'value': 8.5}, {'name': 'United Republic of Tanzania', 'value': 110.6}, {'name': 'Viet Nam', 'value': 371.6}, {'name': 'Yemen', 'value': 85.5}]}, {'name': 'Allow product placement', 'data': [{'name': 'Algeria', 'value': 119.7}, {'name': 'Angola', 'value': 55.7}, {'name': 'Antigua and Barbuda', 'value': 0.4}, {'name': 'Argentina', 'value': 255.5}, {'name': 'Armenia', 'value': 25.8}, {'name': 'Austria', 'value': 71.1}, {'name': 'Bahamas', 'value': 1.5}, {'name': 'Bahrain', 'value': 2.1}, {'name': 'Bangladesh', 'value': 503.0}, {'name': 'Barbados', 'value': 2.5}, {'name': 'Belarus', 'value': 126.9}, {'name': 'Belize', 'value': 1.2}, {'name': 'Benin', 'value': 29.7}, {'name': 'Bhutan', 'value': 2.8}, {'name': 'Bolivia (Plurinational State of)', 'value': 41.4}, {'name': 'Burkina Faso', 'value': 44.2}, {'name': 'Burundi', 'value': 25.7}, {'name': 'Cabo Verde', 'value': 2.0}, {'name': 'Cambodia', 'value': 51.1}, {'name': 'Cameroon', 'value': 71.3}, {'name': 'Central African Republic', 'value': 16.5}, {'name': 'Chad', 'value': 40.0}, {'name': 'Colombia', 'value': 182.9}, {'name': 'Comoros', 'value': 2.1}, {'name': 'Congo', 'value': 12.5}, {'name': 'Costa Rica', 'value': 17.8}, {'name': "Côte d'Ivoire", 'value': 84.7}, {'name': 'Croatia', 'value': 48.4}, {'name': 'Cuba', 'value': 77.5}, {'name': 'Cyprus', 'value': 6.7}, {'name': 'Czechia', 'value': 96.3}, {'name': "Democratic People's Republic of Korea", 'value': 166.1}, {'name': 'Democratic Republic of the Congo', 'value': 169.5}, {'name': 'Dominican Republic', 'value': 40.1}, {'name': 'Ecuador', 'value': 50.2}, {'name': 'El Salvador', 'value': 27.4}, {'name': 'Equatorial Guinea', 'value': 3.5}, {'name': 'Estonia', 'value': 14.5}, {'name': 'Eswatini', 'value': 4.1}, {'name': 'Ethiopia', 'value': 235.2}, {'name': 'Fiji', 'value': 4.7}, {'name': 'Gabon', 'value': 5.4}, {'name': 'Germany', 'value': 786.7}, {'name': 'Ghana', 'value': 82.4}, {'name': 'Grenada', 'value': 0.7}, {'name': 'Guatemala', 'value': 40.3}, {'name': 'Guinea-Bissau', 'value': 4.5}, {'name': 'Guyana', 'value': 3.8}, {'name': 'Haiti', 'value': 40.5}, {'name': 'Honduras', 'value': 21.3}, {'name': 'Indonesia', 'value': 1181.8}, {'name': 'Ireland', 'value': 24.1}, {'name': 'Italy', 'value': 541.8}, {'name': 'Jamaica', 'value': 14.6}, {'name': 'Japan', 'value': 966.2}, {'name': 'Jordan', 'value': 21.1}, {'name': 'Kiribati', 'value': 0.4}, {'name': 'Kyrgyzstan', 'value': 29.4}, {'name': "Lao People's Democratic Republic", 'value': 24.7}, {'name': 'Latvia', 'value': 27.5}, {'name': 'Lebanon', 'value': 23.6}, {'name': 'Lesotho', 'value': 9.1}, {'name': 'Liberia', 'value': 10.0}, {'name': 'Libya', 'value': 22.0}, {'name': 'Luxembourg', 'value': 3.2}, {'name': 'Malawi', 'value': 33.6}, {'name': 'Maldives', 'value': 1.0}, {'name': 'Mali', 'value': 50.7}, {'name': 'Mauritania', 'value': 9.7}, {'name': 'Mauritius', 'value': 7.9}, {'name': 'Mexico', 'value': 449.0}, {'name': 'Micronesia (Federated States of)', 'value': 0.5}, {'name': 'Mozambique', 'value': 63.5}, {'name': 'Myanmar', 'value': 254.2}, {'name': 'Namibia', 'value': 7.0}, {'name': 'Nepal', 'value': 105.9}, {'name': 'Netherlands', 'value': 121.7}, {'name': 'Nicaragua', 'value': 19.4}, {'name': 'Nigeria', 'value': 536.3}, {'name': 'Oman', 'value': 6.2}, {'name': 'Panama', 'value': 12.8}, {'name': 'Papua New Guinea', 'value': 23.9}, {'name': 'Paraguay', 'value': 23.3}, {'name': 'Peru', 'value': 103.4}, {'name': 'Poland', 'value': 341.5}, {'name': 'Republic of Korea', 'value': 204.3}, {'name': 'Rwanda', 'value': 25.9}, {'name': 'Saint Lucia', 'value': 1.0}, {'name': 'Saint Vincent and the Grenadines', 'value': 0.6}, {'name': 'Samoa', 'value': 0.7}, {'name': 'Sao Tome and Principe', 'value': 0.6}, {'name': 'Saudi Arabia', 'value': 68.6}, {'name': 'Senegal', 'value': 37.3}, {'name': 'Seychelles', 'value': 0.6}, {'name': 'Sierra Leone', 'value': 26.5}, {'name': 'Singapore', 'value': 17.8}, {'name': 'Slovakia', 'value': 47.9}, {'name': 'Solomon Islands', 'value': 1.7}, {'name': 'Somalia', 'value': 33.2}, {'name': 'South Africa', 'value': 239.4}, {'name': 'Spain', 'value': 351.8}, {'name': 'Suriname', 'value': 2.7}, {'name': 'Switzerland', 'value': 56.9}, {'name': 'Syrian Arab Republic', 'value': 64.9}, {'name': 'Tajikistan', 'value': 26.8}, {'name': 'Timor-Leste', 'value': 3.1}, {'name': 'Togo', 'value': 20.8}, {'name': 'Tonga', 'value': 0.5}, {'name': 'Trinidad and Tobago', 'value': 9.1}, {'name': 'Turkmenistan', 'value': 25.5}, {'name': 'Uganda', 'value': 82.0}, {'name': 'Ukraine', 'value': 652.9}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 501.8}, {'name': 'United States of America', 'value': 2183.9}, {'name': 'Uruguay', 'value': 27.9}, {'name': 'Uzbekistan', 'value': 128.8}, {'name': 'Vanuatu', 'value': 0.8}, {'name': 'Venezuela (Bolivarian Republic of)', 'value': 105.1}, {'name': 'Zambia', 'value': 32.7}, {'name': 'Zimbabwe', 'value': 40.7}]}]
    }


    Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Tobacco product placement bans (' + year +')'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '5%',
            maxSize: '100%',
            zMin: 0,
            zMax: 500,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: false,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 200
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: s_data

});

}

function renderIcons() {

    // Move icon
    if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            .attr({
                stroke: '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                zIndex: 10
            })
            .add(this.series[2].group);
    }
    this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
            (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
    );

    // Exercise icon
    if (!this.series[1].icon) {
        this.series[1].icon = this.renderer.path(
            ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
                'M', 8, -8, 'L', 16, 0, 8, 8]
        )
            .attr({
                stroke: '#ffffff',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                zIndex: 10
            })
            .add(this.series[2].group);
    }
    this.series[1].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
            (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
    );

    // Stand icon
    if (!this.series[2].icon) {
        this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            .attr({
                stroke: '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                zIndex: 10
            })
            .add(this.series[2].group);
    }

    this.series[2].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
            (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
    );
}

function solidgauge(){
    country = 'Afghanistan'
    structure = {'Afghanistan': {'death': 84.9, 'compliance': 20, 'control': 'Yes'}, 'Albania': {'death': 57.0, 'compliance': 0, 'control': 'Yes'}, 'Algeria': {'death': 45.2, 'compliance': 20, 'prevalance': 15, 'control': 'Yes'}, 'Angola': {'death': 54.9, 'control': 'Yes'}, 'Antigua and Barbuda': {'death': 54.5, 'control': 'No'}, 'Argentina': {'death': 43.3, 'compliance': 60, 'prevalance': 22, 'control': 'Yes'}, 'Armenia': {'death': 61.8, 'compliance': 50, 'prevalance': 25, 'control': 'Yes'}, 'Australia': {'death': 30.0, 'compliance': 80, 'prevalance': 16, 'control': 'Yes'}, 'Austria': {'death': 35.1, 'compliance': 60, 'prevalance': 37, 'control': 'Yes'}, 'Azerbaijan': {'death': 66.6, 'compliance': 30, 'prevalance': 17, 'control': 'No'}, 'Bahamas': {'death': 42.3, 'prevalance': 17, 'control': 'No'}, 'Bahrain': {'death': 45.3, 'prevalance': 20, 'control': 'Yes'}, 'Bangladesh': {'death': 51.6, 'compliance': 50, 'prevalance': 26, 'control': 'Yes'}, 'Barbados': {'death': 52.8, 'prevalance': 8, 'control': 'Yes'}, 'Belarus': {'death': 64.4, 'prevalance': 26, 'control': 'Yes'}, 'Belgium': {'death': 34.1, 'compliance': 80, 'prevalance': 23, 'control': 'Yes'}, 'Belize': {'death': 71.8, 'prevalance': 10, 'control': 'Yes'}, 'Benin': {'death': 64.4, 'compliance': 40, 'control': 'Yes'}, 'Bhutan': {'death': 59.2, 'compliance': 100, 'prevalance': 7, 'control': 'Yes'}, 'Bolivia (Plurinational State of)': {'death': 49.8, 'compliance': 30, 'prevalance': 15, 'control': 'Yes'}, 'Bosnia and Herzegovina': {'death': 52.8, 'prevalance': 41, 'control': 'Yes'}, 'Botswana': {'death': 64.6, 'prevalance': 20, 'control': 'Yes'}, 'Brazil': {'death': 46.2, 'compliance': 100, 'prevalance': 15, 'control': 'Yes'}, 'Brunei Darussalam': {'death': 54.2, 'compliance': 70, 'prevalance': 15, 'control': 'Yes '}, 'Bulgaria': {'death': 63.4, 'compliance': 70, 'prevalance': 37, 'control': 'Yes'}, 'Burkina Faso': {'death': 73.6, 'compliance': 40, 'prevalance': 11, 'control': 'Yes'}, 'Burundi': {'death': 66.2, 'control': 'Yes'}, 'Cabo Verde': {'death': 56.5, 'prevalance': 10, 'control': 'Yes'}, 'Cambodia': {'death': 68.0, 'prevalance': 20, 'control': 'Yes'}, 'Cameroon': {'death': 70.3, 'compliance': 50, 'control': 'Yes'}, 'Canada': {'death': 29.8, 'compliance': 100, 'prevalance': 16, 'control': 'Yes'}, 'Central African Republic': {'death': 67.9, 'control': 'Yes'}, 'Chad': {'death': 75.6, 'compliance': 60, 'prevalance': 11, 'control': 'Yes'}, 'Chile': {'death': 38.5, 'compliance': 100, 'prevalance': 34, 'control': 'Yes'}, 'China': {'death': 55.0, 'compliance': 40, 'prevalance': 28, 'control': 'Yes'}, 'Colombia': {'death': 46.8, 'compliance': 50, 'prevalance': 13, 'control': 'Yes'}, 'Comoros': {'death': 68.3, 'compliance': 50, 'prevalance': 13, 'control': 'Yes'}, 'Congo': {'death': 54.3, 'control': 'Yes'}, 'Costa Rica': {'death': 36.9, 'compliance': 100, 'prevalance': 13, 'control': 'Yes'}, "Côte d'Ivoire": {'death': 95.2, 'control': 'Yes'}, 'Croatia': {'death': 50.9, 'compliance': 60, 'prevalance': 37, 'control': 'Yes'}, 'Cuba': {'death': 40.9, 'compliance': 50, 'prevalance': 22, 'control': 'Yes'}, 'Cyprus': {'death': 39.5, 'compliance': 80, 'prevalance': 30, 'control': 'Yes'}, 'Czechia': {'death': 44.7, 'compliance': 50, 'prevalance': 30, 'control': 'Yes'}, "Democratic People's Republic of Korea": {'death': 68.2, 'compliance': 50, 'prevalance': 20, 'control': 'Yes'}, 'Democratic Republic of the Congo': {'death': 58.4, 'compliance': 70, 'control': 'No'}, 'Denmark': {'death': 37.0, 'compliance': 80, 'prevalance': 21, 'control': 'Yes'}, 'Djibouti': {'death': 60.5, 'control': 'Yes'}, 'Dominican Republic': {'death': 49.4, 'compliance': 70, 'control': 'No'}, 'Ecuador': {'death': 41.3, 'compliance': 70, 'prevalance': 16, 'control': 'Yes'}, 'Egypt': {'death': 86.1, 'compliance': 70, 'prevalance': 24, 'control': 'Yes'}, 'El Salvador': {'death': 49.7, 'prevalance': 9, 'control': 'Yes'}, 'Equatorial Guinea': {'death': 72.9, 'control': 'No'}, 'Eritrea': {'death': 65.9, 'prevalance': 8, 'control': 'Yes'}, 'Estonia': {'death': 47.3, 'compliance': 70, 'prevalance': 34, 'control': 'Yes'}, 'Eswatini': {'death': 79.9, 'prevalance': 7, 'control': 'No'}, 'Ethiopia': {'death': 55.7, 'control': 'Yes'}, 'Fiji': {'death': 81.0, 'compliance': 60, 'prevalance': 30, 'control': 'Yes'}, 'Finland': {'death': 35.2, 'compliance': 100, 'prevalance': 22, 'control': 'Yes'}, 'France': {'death': 29.5, 'compliance': 90, 'prevalance': 34, 'control': 'Yes'}, 'Gabon': {'death': 51.6, 'compliance': 50, 'control': 'Yes'}, 'Gambia': {'death': 73.4, 'prevalance': 16, 'control': 'Yes'}, 'Georgia': {'death': 72.2, 'compliance': 0, 'prevalance': 30, 'control': 'Yes'}, 'Germany': {'death': 37.6, 'prevalance': 24, 'control': 'Yes'}, 'Ghana': {'death': 70.8, 'control': 'Yes'}, 'Greece': {'death': 35.0, 'compliance': 30, 'prevalance': 38, 'control': 'Yes'}, 'Grenada': {'death': 60.7, 'prevalance': 19, 'control': 'Yes'}, 'Guatemala': {'death': 46.1, 'compliance': 30, 'prevalance': 11, 'control': 'Yes'}, 'Guinea': {'death': 77.1, 'compliance': 30, 'control': 'Yes'}, 'Guinea-Bissau': {'death': 67.1, 'control': 'No'}, 'Guyana': {'death': 82.9, 'compliance': 40, 'control': 'Yes'}, 'Haiti': {'death': 75.6, 'control': 'No'}, 'Honduras': {'death': 44.3, 'compliance': 60, 'control': 'Yes'}, 'Hungary': {'death': 61.0, 'compliance': 100, 'prevalance': 20, 'control': 'Yes'}, 'Iceland': {'death': 31.5, 'compliance': 100, 'prevalance': 16, 'control': 'Yes'}, 'India': {'death': 60.1, 'compliance': 60, 'prevalance': 14, 'control': 'Yes'}, 'Indonesia': {'death': 76.5, 'compliance': 10, 'prevalance': 29, 'control': 'Yes'}, 'Iran (Islamic Republic of)': {'death': 57.0, 'compliance': 60, 'prevalance': 11, 'control': 'Yes'}, 'Iraq': {'death': 65.7, 'compliance': 20, 'prevalance': 15, 'control': 'Yes'}, 'Ireland': {'death': 35.2, 'compliance': 100, 'prevalance': 22, 'control': 'Yes'}, 'Israel': {'death': 31.2, 'prevalance': 24, 'control': 'Not available'}, 'Italy': {'death': 31.7, 'prevalance': 20, 'control': 'Yes'}, 'Jamaica': {'death': 43.7, 'compliance': 70, 'prevalance': 14, 'control': 'Yes'}, 'Japan': {'death': 24.5, 'prevalance': 19, 'control': 'Yes'}, 'Jordan': {'death': 61.9, 'compliance': 30, 'control': 'Yes'}, 'Kazakhstan': {'death': 80.8, 'compliance': 60, 'prevalance': 22, 'control': 'Yes'}, 'Kenya': {'death': 37.4, 'prevalance': 8, 'control': 'Yes'}, 'Kiribati': {'death': 79.9, 'compliance': 80, 'prevalance': 58, 'control': 'Yes'}, 'Kuwait': {'death': 59.1, 'control': 'Yes'}, 'Kyrgyzstan': {'death': 77.7, 'prevalance': 26, 'control': 'Yes'}, "Lao People's Democratic Republic": {'death': 77.9, 'compliance': 50, 'control': 'Yes'}, 'Latvia': {'death': 57.6, 'compliance': 80, 'prevalance': 34, 'control': 'Yes'}, 'Lebanon': {'death': 57.5, 'control': 'Yes'}, 'Lesotho': {'death': 77.1, 'compliance': 20, 'prevalance': 24, 'control': 'Yes'}, 'Liberia': {'death': 60.2, 'prevalance': 10, 'control': 'Yes'}, 'Libya': {'death': 64.9, 'compliance': 40, 'control': 'Yes'}, 'Lithuania': {'death': 58.0, 'compliance': 70, 'prevalance': 26, 'control': 'Yes'}, 'Luxembourg': {'death': 30.3, 'compliance': 100, 'prevalance': 21, 'control': 'Yes'}, 'Madagascar': {'death': 63.0, 'compliance': 60, 'control': 'Yes'}, 'Malawi': {'death': 53.7, 'control': 'No'}, 'Malaysia': {'death': 50.2, 'prevalance': 23, 'control': 'Yes'}, 'Maldives': {'death': 46.8, 'compliance': 40, 'prevalance': 19, 'control': 'Yes'}, 'Mali': {'death': 81.2, 'prevalance': 11, 'control': 'Yes'}, 'Malta': {'death': 34.5, 'compliance': 70, 'control': 'Yes'}, 'Mauritania': {'death': 64.6, 'compliance': 0, 'prevalance': 19, 'control': 'No'}, 'Mauritius': {'death': 57.1, 'compliance': 60, 'prevalance': 22, 'control': 'Yes'}, 'Mexico': {'death': 46.8, 'compliance': 30, 'prevalance': 20, 'control': 'Yes'}, 'Micronesia (Federated States of)': {'death': 79.4, 'compliance': 70, 'prevalance': 62, 'control': 'Yes'}, 'Mongolia': {'death': 83.0, 'compliance': 80, 'control': 'Yes'}, 'Montenegro': {'death': 57.4, 'compliance': 20, 'prevalance': 31, 'control': 'Yes'}, 'Morocco': {'death': 53.0, 'compliance': 60, 'prevalance': 18, 'control': 'Yes'}, 'Mozambique': {'death': 52.4, 'compliance': 50, 'control': 'Yes'}, 'Myanmar': {'death': 76.3, 'compliance': 40, 'prevalance': 22, 'control': 'Yes'}, 'Namibia': {'death': 67.7, 'compliance': 30, 'control': 'No'}, 'Nepal': {'death': 64.5, 'compliance': 80, 'control': 'Yes'}, 'Netherlands': {'death': 34.5, 'prevalance': 25, 'control': 'Yes'}, 'New Zealand': {'death': 31.6, 'prevalance': 20, 'control': 'Yes'}, 'Nicaragua': {'death': 47.9, 'compliance': 10, 'control': 'Yes'}, 'Niger': {'death': 66.9, 'compliance': 0, 'control': 'No'}, 'Nigeria': {'death': 81.4, 'compliance': 0, 'prevalance': 4, 'control': 'Yes'}, 'Norway': {'death': 31.5, 'compliance': 100, 'prevalance': 22, 'control': 'Yes'}, 'Oman': {'death': 47.7, 'prevalance': 9, 'control': 'Yes'}, 'Pakistan': {'death': 71.4, 'compliance': 10, 'prevalance': 12, 'control': 'Yes'}, 'Panama': {'death': 37.7, 'compliance': 100, 'prevalance': 6, 'control': 'Yes'}, 'Papua New Guinea': {'death': 70.6, 'compliance': 30, 'prevalance': 26, 'control': 'Yes'}, 'Paraguay': {'death': 51.0, 'prevalance': 14, 'control': 'Yes'}, 'Peru': {'death': 41.9, 'compliance': 80, 'prevalance': 13, 'control': 'Yes'}, 'Philippines': {'death': 68.3, 'compliance': 50, 'prevalance': 25, 'control': 'Yes'}, 'Poland': {'death': 48.4, 'compliance': 80, 'prevalance': 26, 'control': 'Yes'}, 'Portugal': {'death': 33.1, 'compliance': 30, 'prevalance': 26, 'control': 'Yes'}, 'Qatar': {'death': 46.7, 'prevalance': 12, 'control': 'Yes'}, 'Republic of Korea': {'death': 27.5, 'compliance': 70, 'prevalance': 24, 'control': 'Yes'}, 'Republic of Moldova': {'death': 81.4, 'compliance': 30, 'prevalance': 25, 'control': 'Yes'}, 'Romania': {'death': 59.6, 'compliance': 0, 'prevalance': 27, 'control': 'Yes'}, 'Russian Federation': {'death': 67.2, 'compliance': 80, 'control': 'Yes'}, 'Rwanda': {'death': 55.6, 'control': 'No'}, 'Saint Lucia': {'death': 49.3, 'control': 'Yes'}, 'Saint Vincent and the Grenadines': {'death': 62.6, 'prevalance': 12, 'control': 'No'}, 'Samoa': {'death': 54.5, 'compliance': 60, 'control': 'Yes'}, 'Sao Tome and Principe': {'death': 63.4, 'prevalance': 6, 'control': 'Yes'}, 'Saudi Arabia': {'death': 56.7, 'compliance': 80, 'prevalance': 12, 'control': 'Yes'}, 'Senegal': {'death': 63.5, 'compliance': 30, 'control': 'Yes'}, 'Serbia': {'death': 60.4, 'compliance': 40, 'prevalance': 35, 'control': 'Yes'}, 'Seychelles': {'death': 59.0, 'compliance': 100, 'control': 'No'}, 'Sierra Leone': {'death': 96.7, 'prevalance': 26, 'control': 'Yes'}, 'Singapore': {'death': 25.8, 'prevalance': 15, 'control': 'Yes'}, 'Slovakia': {'death': 49.4, 'compliance': 70, 'prevalance': 35, 'control': 'Yes'}, 'Slovenia': {'death': 36.1, 'compliance': 80, 'prevalance': 23, 'control': 'Yes'}, 'Solomon Islands': {'death': 70.8, 'compliance': 20, 'prevalance': 41, 'control': 'Yes'}, 'Somalia': {'death': 64.8, 'control': 'No'}, 'South Africa': {'death': 71.5, 'prevalance': 18, 'control': 'Yes'}, 'South Sudan': {'death': 55.9, 'control': 'Not available'}, 'Spain': {'death': 30.8, 'compliance': 100, 'prevalance': 27, 'control': 'Yes'}, 'Sri Lanka': {'death': 51.9, 'compliance': 50, 'prevalance': 15, 'control': 'Yes'}, 'Sudan': {'death': 74.3, 'control': 'Yes'}, 'Suriname': {'death': 62.2, 'compliance': 70, 'prevalance': 20, 'control': 'Yes'}, 'Sweden': {'death': 32.1, 'prevalance': 21, 'control': 'Yes'}, 'Switzerland': {'death': 29.3, 'prevalance': 25, 'control': 'Yes'}, 'Syrian Arab Republic': {'death': 65.4, 'prevalance': 25, 'control': 'Yes'}, 'Tajikistan': {'death': 70.6, 'control': 'No'}, 'Thailand': {'death': 43.2, 'compliance': 50, 'prevalance': 20, 'control': 'Yes'}, 'Republic of North Macedonia': {'death': 62.9, 'compliance': 70, 'prevalance': 22, 'control': 'Yes'}, 'Timor-Leste': {'death': 58.6, 'compliance': 0, 'control': 'Yes'}, 'Togo': {'death': 79.3, 'compliance': 100, 'prevalance': 7, 'control': 'Yes'}, 'Tonga': {'death': 62.9, 'compliance': 70, 'control': 'Yes'}, 'Trinidad and Tobago': {'death': 62.5, 'compliance': 100, 'prevalance': 21, 'control': 'Yes'}, 'Tunisia': {'death': 54.8, 'prevalance': 25, 'control': 'Yes'}, 'Turkey': {'death': 53.3, 'compliance': 100, 'prevalance': 27, 'control': 'Yes'}, 'Turkmenistan': {'death': 84.3, 'compliance': 90, 'prevalance': 8, 'control': 'Yes'}, 'Uganda': {'death': 63.8, 'compliance': 40, 'prevalance': 6, 'control': 'Yes'}, 'Ukraine': {'death': 69.2, 'compliance': 30, 'control': 'No'}, 'United Arab Emirates': {'death': 50.5, 'prevalance': 20, 'control': 'Yes'}, 'United Kingdom of Great Britain and Northern Ireland': {'death': 35.1, 'compliance': 100, 'prevalance': 19, 'control': 'Yes'}, 'United Republic of Tanzania': {'death': 53.8, 'prevalance': 14, 'control': 'Yes'}, 'United States of America': {'death': 41.4, 'prevalance': 18, 'control': 'Yes'}, 'Uruguay': {'death': 44.8, 'compliance': 100, 'prevalance': 25, 'control': 'Yes'}, 'Uzbekistan': {'death': 69.2, 'compliance': 40, 'prevalance': 10, 'control': 'Yes'}, 'Vanuatu': {'death': 68.0, 'prevalance': 52, 'control': 'Yes'}, 'Venezuela (Bolivarian Republic of)': {'death': 47.8, 'prevalance': 22, 'control': 'Yes'}, 'Viet Nam': {'death': 43.8, 'compliance': 40, 'prevalance': 24, 'control': 'Yes'}, 'Yemen': {'death': 88.0, 'compliance': 40, 'prevalance': 13, 'control': 'Yes'}, 'Zambia': {'death': 55.6, 'compliance': 30, 'control': 'No'}, 'Zimbabwe': {'death': 59.0, 'compliance': 100, 'control': 'Yes'}}
    death_rate = structure[country]['death']
    comp_rate = structure[country]['compliance']
    cont = structure[country]['control']
    preva_rate = structure[country]['prevalance']

Highcharts.chart('container', {

    chart: {
        type: 'solidgauge',
        height: '110%',
        events: {
            render: renderIcons
        }
    },

    title: {
        text: 'Activity',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '114%',
            innerRadius: '90%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Mortality Rate',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: death_rate
        }]
    }, {
        name: 'Prevalence',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: preva_rate
        }]
    }, {
        name: 'Compliance',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: comp_rate
        }]
    }]
});
}