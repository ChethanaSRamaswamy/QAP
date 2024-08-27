//
// This file will have the data related to Brand, Region, Locale and Test Case
// The data here will have to in sync with the data in index.html
//


// This array is a direct copy from the index.html file with Feature, Test Scenario, PC tag and Mobile tag
  var tcName = [ [ "TC99",  "Accessibility",         "Accessibility Testing - Auto scan - PC Home Page, MPP, SPP",                                        "AccessibilityPC",            "AccessibilityMOB"           ],
                  ]
				 
				 
// This array represents Brand data in the index.html
  var brandName = [ 
                 [ 'MC', 'MAC'           ],
                 [ 'CL', 'Clinique'      ],
                 [ 'OR', 'Origins'       ],
                 [ 'EL', 'EsteeLauder'   ],
                 [ 'BB', 'BobbiBrown'    ],
                 [ 'LM', 'Lamer'         ],
                 [ 'LS', 'LabSeries'     ],
                 [ 'AV', 'Aveda'         ],
                 [ 'JM', 'JoMalone'      ],
                 [ 'BU', 'Bumble'        ],
                 [ 'BE', 'Becca'         ],
                 [ 'BK', 'Kilian'        ],
                 [ 'DA', 'Darphin'       ],
                 [ 'DJ', 'DrJart'        ],
                 [ 'GG', 'GlamGlow'      ],
                 [ 'SB', 'SmashBox'      ],
                 [ 'FM', 'FredericMalle' ],
                 [ 'TF', 'TooFaced'      ]  ]


// This array represents Locale Region data in the index.html
  var localeName = [
                 [ 'US', 'NA',   'US'                    ],
                 [ 'CA', 'NA',   'Canada'                ],
                 [ 'UK', 'UK',   'UK'                    ],
                 [ 'JP', 'APAC', 'Japan'                 ],
                 [ 'AU', 'APAC', 'Australia'             ],
                 [ 'CN', 'APAC', 'China'                 ],
                 [ 'HK', 'APAC', 'HongKong'              ],
                 [ 'KR', 'APAC', 'Korea'                 ],
                 [ 'MY', 'APAC', 'Malaysia'              ],
                 [ 'NZ', 'APAC', 'NewZealand'            ],
                 [ 'SG', 'APAC', 'Singapore'             ],
                 [ 'TH', 'APAC', 'Thailand'              ],
                 [ 'TW', 'APAC', 'Taiwan'                ],
                 [ 'DE', 'EMEA', 'Germany'               ],
                 [ 'ES', 'EMEA', 'Spain'                 ],
                 [ 'FR', 'EMEA', 'France'                ],
                 [ 'BE', 'EMEA', 'Belgium'               ],
                 [ 'NL', 'EMEA', 'Netherlands'           ],
                 [ 'NO', 'EMEA', 'Norway'                ],
                 [ 'GR', 'EMEA', 'Greece'                ],
                 [ 'AT', 'EMEA', 'Austria'               ],
                 [ 'CZ', 'EMEA', 'Czech Republic'        ],
                 [ 'DK', 'EMEA', 'Denmark'               ],
                 [ 'EU', 'EMEA', 'European Union'        ],
                 [ 'FI', 'EMEA', 'Finland'               ],
                 [ 'HU', 'EMEA', 'Hungary'               ],
                 [ 'IN', 'EMEA', 'India'                 ],
                 [ 'IL', 'EMEA', 'Israel'                ],
                 [ 'IT', 'EMEA', 'Italy'                 ],
                 [ 'ME', 'EMEA', 'Middle East'           ],
                 [ 'PL', 'EMEA', 'Poland'                ],
                 [ 'PT', 'EMEA', 'Portugal'              ],
                 [ 'RO', 'EMEA', 'Romania'               ],
                 [ 'KSA','EMEA', 'Saudi Arabia'          ],
                 [ 'ZA', 'EMEA', 'South Africa'          ],
                 [ 'SE', 'EMEA', 'Sweden'                ],
                 [ 'CH', 'EMEA', 'Switzerland'           ],
                 [ 'TR', 'EMEA', 'Turkey'                ],
                 [ 'UAE','EMEA', 'United Arab Emirates'  ],
                 [ 'MX', 'LATAM','Mexico'                ],
                 [ 'BR', 'LATAM','Brazil'                ],
                 [ 'CE', 'LATAM','Chile'                 ]  ] 

  var brandUrlExceptionList = [
                  ['www.avedakorea.com', 'KR', 'APAC', 'Korea', 'AV', 'Aveda'],
                  ['www.aveda.com', 'US', 'NA', 'US', 'AV', 'Aveda'],
                  ['www.lamerkorea.com', 'KR', 'APAC', 'Korea', 'LM', 'Lamer'],
                  ['www.maccosmeticsnordics.com', 'NO', 'EMEA', 'Norway', 'MC', 'MAC'],
                  ['www.bobbibrowncosmetics.com', 'US', 'NA', 'US', 'BB', 'BobbiBrown'],
                  ['www.bumbleandbumble.com', 'US', 'NA', 'US', 'BU', 'Bumble'],
                  ['www.bykilian.com', 'US', 'NA', 'US', 'BK', 'Kilian'],
                  ['www.clinique.com', 'US', 'NA', 'US', 'CL', 'Clinique'],
                  ['www.darphin.com', 'US', 'NA', 'US', 'DA', 'Darphin'],
                  ['www.drjart.com', 'US', 'NA', 'US', 'DJ', 'DrJart'],
                  ['www.esteelauder.com', 'US', 'NA', 'US', 'EL', 'EsteeLauder'],
                  ['www.fredericmalle.com', 'US', 'NA', 'US', 'FM', 'FredericMalle'],
                  ['www.glamglow.com', 'US', 'NA', 'US', 'GG', 'GlamGlow'],
                  ['www.jomalone.com', 'US', 'NA', 'US', 'JM', 'JoMalone'],
                  ['www.cremedelamer.com', 'US', 'NA', 'US', 'LM', 'Lamer'],
                  ['www.labseries.com', 'US', 'NA', 'US', 'LS', 'LabSeries'],
                  ['www.maccosmetics.com', 'US', 'NA', 'US', 'MC', 'MAC'],
                  ['www.origins.com', 'US', 'NA', 'US', 'OR', 'Origins'],
                  ['www.smashbox.com', 'US', 'NA', 'US', 'SB', 'SmashBox'],
                  ['www.toofaced.com', 'US', 'NA', 'US', 'TF', 'TooFaced'],
                ];

if (typeof module !== 'undefined') {
  module.exports = { tcName, brandName, localeName };
}
