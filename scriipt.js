function scriipt() {
    
    var age = prompt('How old are you?');
    
        var gender = prompt('Male or Female? (there is no inbetween you confused twat)');
    
    var male = [76.15,
    75.63,
    74.67,
    73.69,
    72.71,
    71.72,
    70.73,
    69.74,
    68.75,
    67.76,
    66.76,
    65.77,
    64.78,
    63.79,
    62.8,
    61.82,
    60.84,
    59.88,
    58.91,
    57.96,
    57.01,
    56.08,
    55.14,
    54.22,
    53.29,
    52.37,
    51.44,
    50.52,
    49.59,
    48.67,
    47.75,
    46.82,
    45.9,
    44.98,
    44.06,
    43.14,
    42.22,
    41.3,
    40.38,
    39.46,
    38.54,
    37.63,
    36.72,
    35.81,
    34.9,
    34,
    33.11,
    32.22,
    31.34,
    30.46,
    29.6,
    28.75,
    27.9,
    27.07,
    26.25,
    25.43,
    24.63,
    23.83,
    23.05,
    22.27,
    21.51,
    20.75,
    20,
    19.27,
    18.53,
    17.81,
    17.09,
    16.38,
    15.68,
    14.98,
    14.3,
    13.63,
    12.97,
    12.33,
    11.7,
    11.08,
    10.48,
    9.89,
    9.33,
    8.77,
    8.24,
    7.72,
    7.23,
    6.75,
    6.3,
    5.87,
    5.45,
    5.06,
    4.69,
    4.35,
    4.03,
    3.73,
    3.46,
    3.21,
    2.99,
    2.8,
    2.63,
    2.48,
    2.34,
    2.22,
    2.11,
    2,
    1.89,
    1.79,
    1.69,
    1.59,
    1.5,
    1.41,
    1.33,
    1.25,
    1.17,
    1.1,
    1.03,
    0.96,
    0.89,
    0.83,
    0.77,
    0.71,
    0.66,
    0.61
    ];
    
    var female = [80.97,
    80.41,
    79.44,
    78.45,
    77.47,
    76.48,
    75.48,
    74.49,
    73.5,
    72.51,
    71.51,
    70.52,
    69.53,
    68.53,
    67.54,
    66.56,
    65.57,
    64.59,
    63.61,
    62.63,
    61.65,
    60.67,
    59.7,
    58.73,
    57.76,
    56.79,
    55.82,
    54.85,
    53.88,
    52.92,
    51.95,
    50.99,
    50.03,
    49.07,
    48.11,
    47.16,
    46.2,
    45.25,
    44.3,
    43.35,
    42.41,
    41.46,
    40.52,
    39.59,
    38.65,
    37.72,
    36.8,
    35.88,
    34.96,
    34.06,
    33.15,
    32.26,
    31.37,
    30.49,
    29.61,
    28.74,
    27.88,
    27.02,
    26.17,
    25.32,
    24.48,
    23.64,
    22.81,
    21.99,
    21.17,
    20.36,
    19.55,
    18.76,
    17.98,
    17.2,
    16.44,
    15.69,
    14.96,
    14.24,
    13.54,
    12.85,
    12.17,
    11.51,
    10.86,
    10.24,
    9.63,
    9.04,
    8.48,
    7.93,
    7.41,
    6.91,
    6.43,
    5.98,
    5.54,
    5.14,
    4.76,
    4.41,
    4.09,
    3.8,
    3.54,
    3.3,
    3.09,
    2.9,
    2.73,
    2.57,
    2.42,
    2.27,
    2.14,
    2,
    1.88,
    1.76,
    1.64,
    1.53,
    1.43,
    1.33,
    1.24,
    1.15,
    1.06,
    0.98,
    0.9,
    0.83,
    0.77,
    0.71,
    0.66,
    0.61
    ];

    if (gender == 'Male'){
        alert('You are expected to live ' + male[age] + ' more years');
        alert('this info is from www.ssa.gov/oact/STATS/table4c6.html');
        
    }
    if (gender == 'Female'){
        alert('You are expected to live ' + female[age] + ' more years');
        alert('this info is from www.ssa.gov/oact/STATS/table4c6.html');
    }
}