//import "@amcharts/amcharts4/core";
//import "@amcharts/amcharts4/maps";
//import "@amcharts/amcharts4/charts";
//import "@amcharts/amcharts4-geodata/worldLow";
//import "@amcharts/amcharts4/themes/dataviz";
//import "@amcharts/amcharts4/themes/animated";


function government() {
    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '100%'
        },
        title: {
            text: 'Tobacco control programs by country (2014)'
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
                zMax: 100,
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
                        value: 18
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
    series: [{'name': 'Only government objectives on tobacco control exist', 'data': [{'name': 'Czechia', 'value': 29.9}, {'name': 'Guatemala', 'value': 11.4}, {'name': 'Peru', 'value': 13.3}, {'name': 'Saint Kitts and Nevis', 'value': 8.7}, {'name': 'Vanuatu', 'value': 52.5}]}, {'name': 'Only national agency for tobacco control exists', 'data': [{'name': 'Azerbaijan', 'value': 16.7}, {'name': 'Dominica', 'value': 10.2}, {'name': 'Eswatini', 'value': 7.1}]}, {'name': 'Both exist', 'data': [{'name': 'Algeria', 'value': 15.3}, {'name': 'Argentina', 'value': 22.1}, {'name': 'Armenia', 'value': 25.4}, {'name': 'Australia', 'value': 15.8}, {'name': 'Austria', 'value': 37.0}, {'name': 'Bahrain', 'value': 19.9}, {'name': 'Bangladesh', 'value': 26.2}, {'name': 'Barbados', 'value': 7.5}, {'name': 'Belarus', 'value': 25.9}, {'name': 'Belgium', 'value': 23.0}, {'name': 'Belize', 'value': 10.2}, {'name': 'Bhutan', 'value': 7.4}, {'name': 'Bolivia (Plurinational State of)', 'value': 14.8}, {'name': 'Bosnia and Herzegovina', 'value': 40.7}, {'name': 'Botswana', 'value': 19.7}, {'name': 'Brazil', 'value': 14.7}, {'name': 'Bulgaria', 'value': 36.8}, {'name': 'Burkina Faso', 'value': 11.3}, {'name': 'Cabo Verde', 'value': 9.9}, {'name': 'Cambodia', 'value': 19.5}, {'name': 'Canada', 'value': 16.1}, {'name': 'Chad', 'value': 11.2}, {'name': 'Chile', 'value': 34.0}, {'name': 'China', 'value': 28.1}, {'name': 'Colombia', 'value': 13.0}, {'name': 'Comoros', 'value': 12.9}, {'name': 'Cook Islands', 'value': 32.0}, {'name': 'Costa Rica', 'value': 13.4}, {'name': 'Croatia', 'value': 37.4}, {'name': 'Cuba', 'value': 22.1}, {'name': 'Cyprus', 'value': 30.1}, {'name': "Democratic People's Republic of Korea", 'value': 20.1}, {'name': 'Denmark', 'value': 21.0}, {'name': 'Ecuador', 'value': 16.3}, {'name': 'Egypt', 'value': 24.4}, {'name': 'El Salvador', 'value': 8.8}, {'name': 'Eritrea', 'value': 8.0}, {'name': 'Estonia', 'value': 34.2}, {'name': 'Fiji', 'value': 30.5}, {'name': 'Finland', 'value': 21.9}, {'name': 'France', 'value': 34.1}, {'name': 'Gambia', 'value': 15.6}, {'name': 'Georgia', 'value': 30.3}, {'name': 'Germany', 'value': 24.5}, {'name': 'Greece', 'value': 38.2}, {'name': 'Grenada', 'value': 18.6}, {'name': 'Hungary', 'value': 20.5}, {'name': 'Iceland', 'value': 16.0}, {'name': 'India', 'value': 14.0}, {'name': 'Indonesia', 'value': 29.3}, {'name': 'Iran (Islamic Republic of)', 'value': 10.9}, {'name': 'Iraq', 'value': 14.8}, {'name': 'Ireland', 'value': 21.9}, {'name': 'Italy', 'value': 19.5}, {'name': 'Jamaica', 'value': 14.5}, {'name': 'Japan', 'value': 19.3}, {'name': 'Kazakhstan', 'value': 22.4}, {'name': 'Kenya', 'value': 7.8}, {'name': 'Kiribati', 'value': 58.0}, {'name': 'Kyrgyzstan', 'value': 25.7}, {'name': 'Latvia', 'value': 34.3}, {'name': 'Lesotho', 'value': 24.5}, {'name': 'Liberia', 'value': 9.9}, {'name': 'Lithuania', 'value': 26.1}, {'name': 'Luxembourg', 'value': 21.0}, {'name': 'Malaysia', 'value': 23.1}, {'name': 'Maldives', 'value': 18.8}, {'name': 'Mali', 'value': 10.8}, {'name': 'Marshall Islands', 'value': 23.1}, {'name': 'Mauritius', 'value': 21.7}, {'name': 'Mexico', 'value': 19.9}, {'name': 'Micronesia (Federated States of)', 'value': 62.4}, {'name': 'Montenegro', 'value': 31.0}, {'name': 'Morocco', 'value': 18.0}, {'name': 'Myanmar', 'value': 22.0}, {'name': 'Nauru', 'value': 52.9}, {'name': 'Netherlands', 'value': 25.0}, {'name': 'New Zealand', 'value': 20.1}, {'name': 'Nigeria', 'value': 3.9}, {'name': 'Niue', 'value': 17.7}, {'name': 'Norway', 'value': 22.0}, {'name': 'Oman', 'value': 8.6}, {'name': 'Pakistan', 'value': 12.4}, {'name': 'Palau', 'value': 16.6}, {'name': 'Panama', 'value': 6.1}, {'name': 'Papua New Guinea', 'value': 26.3}, {'name': 'Paraguay', 'value': 14.5}, {'name': 'Philippines', 'value': 25.4}, {'name': 'Poland', 'value': 26.0}, {'name': 'Portugal', 'value': 26.3}, {'name': 'Qatar', 'value': 12.1}, {'name': 'Republic of Korea', 'value': 24.1}, {'name': 'Republic of Moldova', 'value': 25.3}, {'name': 'Romania', 'value': 26.7}, {'name': 'Sao Tome and Principe', 'value': 5.5}, {'name': 'Saudi Arabia', 'value': 12.2}, {'name': 'Serbia', 'value': 34.7}, {'name': 'Sierra Leone', 'value': 25.8}, {'name': 'Singapore', 'value': 15.0}, {'name': 'Slovakia', 'value': 34.9}, {'name': 'Slovenia', 'value': 22.6}, {'name': 'Solomon Islands', 'value': 41.4}, {'name': 'South Africa', 'value': 18.2}, {'name': 'Spain', 'value': 27.0}, {'name': 'Sri Lanka', 'value': 15.0}, {'name': 'Suriname', 'value': 20.0}, {'name': 'Sweden', 'value': 21.0}, {'name': 'Switzerland', 'value': 25.0}, {'name': 'Syrian Arab Republic', 'value': 24.7}, {'name': 'Thailand', 'value': 19.9}, {'name': 'Republic of North Macedonia', 'value': 22.1}, {'name': 'Togo', 'value': 6.8}, {'name': 'Trinidad and Tobago', 'value': 21.1}, {'name': 'Tunisia', 'value': 24.9}, {'name': 'Turkey', 'value': 27.1}, {'name': 'Turkmenistan', 'value': 8.3}, {'name': 'Tuvalu', 'value': 37.9}, {'name': 'Uganda', 'value': 5.8}, {'name': 'United Arab Emirates', 'value': 20.5}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 19.2}, {'name': 'United Republic of Tanzania', 'value': 14.1}, {'name': 'United States of America', 'value': 17.8}, {'name': 'Uruguay', 'value': 25.0}, {'name': 'Uzbekistan', 'value': 10.5}, {'name': 'Venezuela (Bolivarian Republic of)', 'value': 21.5}, {'name': 'Viet Nam', 'value': 23.8}, {'name': 'Yemen', 'value': 13.3}]}, {'name': 'Neither exist', 'data': [{'name': 'Bahamas', 'value': 16.7}, {'name': 'Mauritania', 'value': 18.9}, {'name': 'Saint Vincent and the Grenadines', 'value': 12.2}]}]

    });
}

function advertisers() {
    Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Tobacco control programs by country (2014)'
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
            zMax: 100,
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
                    value: 18
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{'name': 'Do not allow product placement', 'data': [{'name': 'Argentina', 'value': 22.1}, {'name': 'Australia', 'value': 15.8}, {'name': 'Austria', 'value': 37.0}, {'name': 'Azerbaijan', 'value': 16.7}, {'name': 'Bahrain', 'value': 19.9}, {'name': 'Belgium', 'value': 23.0}, {'name': 'Bosnia and Herzegovina', 'value': 40.7}, {'name': 'Botswana', 'value': 19.7}, {'name': 'Brazil', 'value': 14.7}, {'name': 'Brunei Darussalam', 'value': 15.2}, {'name': 'Bulgaria', 'value': 36.8}, {'name': 'Burkina Faso', 'value': 11.3}, {'name': 'Canada', 'value': 16.1}, {'name': 'Chad', 'value': 11.2}, {'name': 'Chile', 'value': 34.0}, {'name': 'China', 'value': 28.1}, {'name': 'Colombia', 'value': 13.0}, {'name': 'Cook Islands', 'value': 32.0}, {'name': 'Costa Rica', 'value': 13.4}, {'name': 'Croatia', 'value': 37.4}, {'name': 'Cyprus', 'value': 30.1}, {'name': 'Czechia', 'value': 29.9}, {'name': 'Denmark', 'value': 21.0}, {'name': 'Ecuador', 'value': 16.3}, {'name': 'Egypt', 'value': 24.4}, {'name': 'El Salvador', 'value': 8.8}, {'name': 'Eritrea', 'value': 8.0}, {'name': 'Eswatini', 'value': 7.1}, {'name': 'Fiji', 'value': 30.5}, {'name': 'Finland', 'value': 21.9}, {'name': 'France', 'value': 34.1}, {'name': 'Gambia', 'value': 15.6}, {'name': 'Georgia', 'value': 30.3}, {'name': 'Germany', 'value': 24.5}, {'name': 'Greece', 'value': 38.2}, {'name': 'Hungary', 'value': 20.5}, {'name': 'Iceland', 'value': 16.0}, {'name': 'India', 'value': 14.0}, {'name': 'Iran (Islamic Republic of)', 'value': 10.9}, {'name': 'Iraq', 'value': 14.8}, {'name': 'Israel', 'value': 24.0}, {'name': 'Italy', 'value': 19.5}, {'name': 'Kazakhstan', 'value': 22.4}, {'name': 'Kenya', 'value': 7.8}, {'name': 'Kiribati', 'value': 58.0}, {'name': 'Kyrgyzstan', 'value': 25.7}, {'name': 'Latvia', 'value': 34.3}, {'name': 'Lithuania', 'value': 26.1}, {'name': 'Luxembourg', 'value': 21.0}, {'name': 'Malaysia', 'value': 23.1}, {'name': 'Maldives', 'value': 18.8}, {'name': 'Mali', 'value': 10.8}, {'name': 'Mauritius', 'value': 21.7}, {'name': 'Montenegro', 'value': 31.0}, {'name': 'Morocco', 'value': 18.0}, {'name': 'Nauru', 'value': 52.9}, {'name': 'Netherlands', 'value': 25.0}, {'name': 'New Zealand', 'value': 20.1}, {'name': 'Norway', 'value': 22.0}, {'name': 'Pakistan', 'value': 12.4}, {'name': 'Panama', 'value': 6.1}, {'name': 'Philippines', 'value': 25.4}, {'name': 'Poland', 'value': 26.0}, {'name': 'Portugal', 'value': 26.3}, {'name': 'Qatar', 'value': 12.1}, {'name': 'Republic of Moldova', 'value': 25.3}, {'name': 'Romania', 'value': 26.7}, {'name': 'Serbia', 'value': 34.7}, {'name': 'Slovenia', 'value': 22.6}, {'name': 'Solomon Islands', 'value': 41.4}, {'name': 'South Africa', 'value': 18.2}, {'name': 'Spain', 'value': 27.0}, {'name': 'Sri Lanka', 'value': 15.0}, {'name': 'Suriname', 'value': 20.0}, {'name': 'Sweden', 'value': 21.0}, {'name': 'Syrian Arab Republic', 'value': 24.7}, {'name': 'Thailand', 'value': 19.9}, {'name': 'Republic of North Macedonia', 'value': 22.1}, {'name': 'Togo', 'value': 6.8}, {'name': 'Trinidad and Tobago', 'value': 21.1}, {'name': 'Tunisia', 'value': 24.9}, {'name': 'Turkey', 'value': 27.1}, {'name': 'Tuvalu', 'value': 37.9}, {'name': 'United Arab Emirates', 'value': 20.5}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 19.2}, {'name': 'United Republic of Tanzania', 'value': 14.1}, {'name': 'Uruguay', 'value': 25.0}, {'name': 'Vanuatu', 'value': 52.5}, {'name': 'Viet Nam', 'value': 23.8}, {'name': 'Yemen', 'value': 13.3}]}, {'name': 'Allow product placement', 'data': [{'name': 'Algeria', 'value': 15.3}, {'name': 'Armenia', 'value': 25.4}, {'name': 'Bahamas', 'value': 16.7}, {'name': 'Bangladesh', 'value': 26.2}, {'name': 'Barbados', 'value': 7.5}, {'name': 'Belarus', 'value': 25.9}, {'name': 'Belize', 'value': 10.2}, {'name': 'Bhutan', 'value': 7.4}, {'name': 'Bolivia (Plurinational State of)', 'value': 14.8}, {'name': 'Cabo Verde', 'value': 9.9}, {'name': 'Cambodia', 'value': 19.5}, {'name': 'Comoros', 'value': 12.9}, {'name': 'Cuba', 'value': 22.1}, {'name': "Democratic People's Republic of Korea", 'value': 20.1}, {'name': 'Dominica', 'value': 10.2}, {'name': 'Estonia', 'value': 34.2}, {'name': 'Grenada', 'value': 18.6}, {'name': 'Guatemala', 'value': 11.4}, {'name': 'Indonesia', 'value': 29.3}, {'name': 'Ireland', 'value': 21.9}, {'name': 'Jamaica', 'value': 14.5}, {'name': 'Japan', 'value': 19.3}, {'name': 'Lesotho', 'value': 24.5}, {'name': 'Liberia', 'value': 9.9}, {'name': 'Marshall Islands', 'value': 23.1}, {'name': 'Mauritania', 'value': 18.9}, {'name': 'Mexico', 'value': 19.9}, {'name': 'Micronesia (Federated States of)', 'value': 62.4}, {'name': 'Myanmar', 'value': 22.0}, {'name': 'Nigeria', 'value': 3.9}, {'name': 'Niue', 'value': 17.7}, {'name': 'Oman', 'value': 8.6}, {'name': 'Palau', 'value': 16.6}, {'name': 'Papua New Guinea', 'value': 26.3}, {'name': 'Paraguay', 'value': 14.5}, {'name': 'Peru', 'value': 13.3}, {'name': 'Republic of Korea', 'value': 24.1}, {'name': 'Saint Kitts and Nevis', 'value': 8.7}, {'name': 'Saint Vincent and the Grenadines', 'value': 12.2}, {'name': 'Sao Tome and Principe', 'value': 5.5}, {'name': 'Saudi Arabia', 'value': 12.2}, {'name': 'Sierra Leone', 'value': 25.8}, {'name': 'Singapore', 'value': 15.0}, {'name': 'Slovakia', 'value': 34.9}, {'name': 'Switzerland', 'value': 25.0}, {'name': 'Turkmenistan', 'value': 8.3}, {'name': 'Uganda', 'value': 5.8}, {'name': 'United States of America', 'value': 17.8}, {'name': 'Uzbekistan', 'value': 10.5}, {'name': 'Venezuela (Bolivarian Republic of)', 'value': 21.5}]}]

});

}
