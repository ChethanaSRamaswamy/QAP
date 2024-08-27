
// Check for the change in Environment
// Revision tag is enabled for Stage and Feature
// PerlGem and JiraId is enabled only for Feature

function envChange() {
  
  var selectVal = document.getElementById("environment").value;
  console.log(selectVal)
  if (selectVal == "STAGE") {
    document.getElementById("revisiontag").disabled = false
    document.getElementById("apienv").disabled = false
    document.getElementById("ncsaservernumber").disabled = true
    document.getElementById("perlgem").disabled = true
    document.getElementById("jiraid").disabled = true
  }
  
  else if (selectVal == "DEV") {
    document.getElementById("revisiontag").disabled = false
    document.getElementById("apienv").disabled = false
    document.getElementById("ncsaservernumber").disabled = true
    document.getElementById("perlgem").disabled = true
    document.getElementById("jiraid").disabled = true
  }

  else if (selectVal == "FEAT") {
    document.getElementById("revisiontag").disabled = false
    document.getElementById("apienv").disabled = false
    document.getElementById("ncsaservernumber").disabled = true
    document.getElementById("perlgem").disabled = false
    document.getElementById("jiraid").disabled = false
  }

  else if (selectVal == "ENG") {
    document.getElementById("revisiontag").disabled = false
    document.getElementById("apienv").disabled = false
    document.getElementById("ncsaservernumber").disabled = false
    document.getElementById("perlgem").disabled = true
    document.getElementById("jiraid").disabled = false
  }

  else if (selectVal == "PREVIEW") {
    document.getElementById("revisiontag").disabled = false
    document.getElementById("apienv").disabled = false
    document.getElementById("ncsaservernumber").disabled = true
    document.getElementById("perlgem").disabled = false
    document.getElementById("jiraid").disabled = false
  }

  else {
    document.getElementById("revisiontag").disabled = true
    document.getElementById("apienv").disabled = true
    document.getElementById("ncsaservernumber").disabled = true
    document.getElementById("perlgem").disabled = true
    document.getElementById("jiraid").disabled = true
  }

  /*if (selectVal == "STAGE") {
	document.getElementById("revisiontag").disabled = false
	document.getElementById("apienv").disabled = false
  reset()
  } 
  else if (selectVal == "FEAT") {
  document.getElementById("apienv").disabled = false
	document.getElementById("perlgem").disabled = false
	document.getElementById("jiraid").disabled = false
  }
  else if (selectVal == "ENG") {
	  document.getElementById("jiraid").disabled = false
    document.getElementById("ncsaservernumber").disabled = false
  }
  else
  {
    document.getElementById("revisiontag").disabled = true
	  document.getElementById("apienv").disabled = true
    document.getElementById("perlgem").disabled = true
	  document.getElementById("jiraid").disabled = true
    document.getElementById("ncsaservernumber").disabled = true
  }*/
}

  // This array has tc short name, tc name, tag for PC and tag for Mobile
  var tcName = [ [ "TCAA",  "Checkout",         "*****SELECT CHECKOUT SCENARIOS*****",                                        "PC",            "MOB","disable"           ],
                 [ "TC01",  "Checkout",         "Verify Guest User checkout",                                        "GUPC",            "GUMOB"           ],
                 [ "TC02",  "Checkout",         "Verify Return User checkout",                                       "RUPC",            "RUMOB"           ],
                 [ "TC03",  "Checkout",         "Verify Return User checkout using saved card",                      "SCRUPC",          "SCRUMOB"         ],
                 [ "TC04",  "Checkout",         "Verify New User checkout",                                          "NUPC",            "NUMOB"           ],
                 [ "TC05",  "Checkout",         "Verify User can edit quantity and offers in Cart",                  "CARTPC",          "CARTMOB"         ],
                 [ "TCBB",  "Account",         "*****SELECT ACCOUNT SCENARIOS*****",                                        "PC",            "MOB","disable"           ],
                 [ "TC06",  "Account",          "Verify User can edit billing/shipping address",                     "ACCPC",           "ACCMOB"          ],
                 [ "TC07",  "Account",          "Verify Return User can edit billing/shipping address (CN,KR)",      "ACCRUPC",         "ACCRUMOB"        ],
                 [ "TCCC",  "MPPSPP",         "*****SELECT MPPSPP SCENARIOS*****",                                        "PC",            "MOB","disable"           ],
                 [ "TC08",  "MPPSPP",           "Sanity check around MPP and SPP",                                   "MPPSPP",          "MPPSPPMob"       ],
                 [ "TC09",  "MPPSPP",           "Regression tests for SD SPP",                                       "SDSPP",           "SDSPPMOB"        ],
                 [ "TC10",  "MPPSPP",           "Regression tests for SD MPP",                                       "SDMPP",           "SDMPPMOB"        ],
                 [ "TC11",  "MPPSPP",           "Add engraving to the product in SD SPP",                            "SDENGFRA",        "SDENGFRAMOB"     ],
                 [ "TCDD",  "StoreLocator",         "*****SELECT STORE LOCATOR SCENARIOS*****",                                        "PC",            "MOB","disable"           ],
                 [ "TC12",  "StoreLocator",     "Verify User can get store location with valid zipcode/city",        "STORELOCPC",      "STORELOCMOB"     ],
                 [ "TCEE",  "GNAV Footer",  "*****SELECT GNAV Footer SCENARIOS*****",                                        "PC",            "MOB","disable"           ],
                 [ "TC13",  "GNAV Footer",      "Verify User can navigate through all link in GNAV",                 "Gnav",            "GnavMob"         ],
                 [ "TC14",  "GNAV Footer",      "Verify User can navigate through all link in Footer",               "Footer",          "FooterMob"       ],
                 [ "TCFF",  "Loyalty",         "*****SELECT LOYALTY SCENARIOS*****",                                    "PC",            "MOB","disable"           ],
                 [ "TC15",  "Loyalty",          "Verity enroll loyalty in Order confirmation",         "GUENROLLLOYALTYPC",       "GUENROLLLOYALTYMOB"       ],
                 [ "TC16",  "Loyalty",          "Verify enroll loyalty from Account registration",     "LOYALTYACCPC",            "LOYALTYACCMOB"            ],
                 [ "TC17",  "Loyalty",          "Verify as non loyalty user from Marketing page",      "NULENROLLINMARKTPAGEPC",  "NULENROLLINMARKTPAGEMOB"  ],
                 [ "TC18",  "Loyalty",          "Verify new user welcome Offer validation",            "NULOYALTYWELCOMEOFFERPC", "NULOYALTYWELCOMEOFFERMOB" ],
                 [ "TCGG",  "OAB",         "*****SELECT OAB SCENARIOS*****",                                        "PC",            "MOB","disable"           ],
                 [ "TC19",  "OAB",              "Online Appointment Booking Drupal",                                 "OABPCDrupal",     "OABMOBDrupal"    ],
                 [ "TC20",  "OAB",              "Online Appointment Booking Stardust",                               "OABPCStardust",   "OABMOBStardust"  ],
                 [ "TC21",  "OAB",              "Virtual Online Appointment Booking Drupal",                         "VOABPCDrupal",    "VOABMOBDrupal"   ],
                 [ "TC22",  "OAB",              "Virtual Online Appointment Booking Stardust",                       "VOABPCStardust",  "VOABMOBStardust" ],
                 [ "TCHH",  "Search",         "*****SELECT SEARCH SCENARIOS*****",                                        "PC",            "MOB","disable"           ],
                 [ "TC23",  "Search",           "Verify user can search for a product and add to bag",               "SANITYSEARCHPC",  "SANITYSEARCHMOB" ],
                 [ "TCII",  "SEO",              "*****SELECT SEO SCENARIOS*****",                                      "PC",            "MOB","disable"           ],
                 [ "TC24",  "SEO",              "Verify SEO requirements for Home Page",                             "SEOSanityHomepagePC",     "SEOSanityHomepageMobile" ],
                 [ "TC25",  "SEO",              "Verify SEO requirements for MPP",                                   "SEOSanityMPPPC",          "SEOSanityMPPMobile"      ],
                 [ "TC26",  "SEO",              "Verify SEO requirements for SPP",                                   "SEOSanitySPPPC",          "SEOSanitySPPMobile"      ],
                 [ "TCJJ",  "React Checkout",         "*****SELECT REACT CHECKOUT SCENARIOS*****",                                        "PC",            "MOB","disable"           ],
                 [ "TC27",  "React Checkout",   "Verify Guest User checkout with Manual offer",                      "RCOGUMOPC",       "RCOGUMOMOB"      ],
                 [ "TC28",  "React Checkout",   "Verify New User checkout with Automatic offer",                     "RCONUAOPC",       "RCONUAOMOB"      ],
                 [ "TC29",  "React Checkout",   "Verify Return User checkout with saved Credit card",                "RCORUSCPC",       "RCORUSCMOB"      ],
                 [ "TC30",  "React Checkout",   "Verify Guest User checkout with Restricted Product in cart",        "RCOGURPAPOPC",    "RCOGURPAPOMOB"   ],
                 [ "TC31",  "React Checkout",   "Verify Return User checkout after saved billing address",           "RCORUEBPC",       "RCORUEBMOB"      ],
                 [ "TC32",  "React Checkout",   "Verify Guest User checkout with new billing address",               "RCOGUEBPC",       "RCOGUEBMOB"      ],
                 [ "TC33",  "React Checkout",   "Verify Newly Registered User checkout",                             "RCOSIGNUPNUPC",   "RCOSIGNUPNUMOB"  ],
                 [ "TC34",  "React Checkout",   "Verify Guest User checkout with PickupInstore",                     "RCOBOPISGUPC",    "RCOBOPISGUMOB"   ],
                 [ "TC35",  "React Checkout",   "Verify Return User checkout with PickupInstore",                    "RCOBOPISRUPC",    "RCOBOPISRUMOB"   ],
                 [ "TC36",  "React Checkout",   "Verify Return User Edit PickupInstore checkout with Delivery",      "RCOBOPISRUEDPC",  "RCOBOPISRUEDMOB" ],
                 [ "TC37",  "React Checkout",   "Verify New User Checkout with Sample",                              "RCOADDSAMPLENUPC",  "RCOADDSAMPLENUMOB"       ],
                 [ "TC38",  "React Checkout",   "Verify Return User Checkout with edit product from Payment Page",   "RCOEDPRODPAYAORUPC","RCOEDPRODPAYAORUMOB"     ],
                 [ "TC39",  "React Checkout",   "Verify Return User Checkout with edit product from Delivery Page",  "RCOEDPRODDELRUPC",  "RCOEDPRODDELRUMOB"       ],
                 [ "TC40",  "React Checkout",   "Verify New User Checkout with PickupInstore and Manual offer",      "RCOBOPISNUMOPC",    "RCOBOPISNUMOMOB"         ],
                 [ "TCKK",  "VTO",         "*****SELECT VTO SCENARIOS*****",                                        "PC",            "MOB","disable"           ],
                 [ "TC41",  "VTO",              "Verify click back arrow",                                           "BackArrowVTO",      "BackArrowVTOMobile"      ],
                 [ "TC42",  "VTO",              "Verify choose a model",                                             "ChooseAModelE2EVTO","ChooseAModelE2EVTOMobile"],
                 [ "TC43",  "VTO",              "Verify click close icon",                                           "CloseIconVTO",      "CloseIconVTOMobile"      ],
                 [ "TC44",  "VTO",              "Verify share icon",                                                 "ShareIconVTO",      "ShareIconVTOMobile"      ],
                 [ "TC45",  "VTO",              "Verify split slider",                                               "SplitSliderVTO",    "SplitSliderVTOMobile"    ]  ]

  // This array has the mapping between the Train and the Team
  // It also has the Dashboard number and the Launch filter number
  var trainTeam = [ [ "Choose",          "Choose",                "", "" ],
                    [ "Regional",        "Choose",                "", "" ],
                    [ "Regional",        "NA",                    "2",   "1"   ],
                    [ "Regional",        "APAC",                  "4",   "3"   ],
                    [ "Regional",        "EMEA",                  "6",   "5"   ],
                    [ "Regional",        "LATAM",                 "8",   "7"   ],
                    [ "Regional",        "UK",                    "10",  "9"   ],
                    [ "Regional",        "GlobalQA",              "12",  "11"  ],
                    [ "Regional",        "ReleaseQA",             "14",  "13"  ],
                    [ "Regional",        "SiteRollouts",          "16",  "15"  ],
                    [ "BrandExp",        "Choose",                "", "" ],
                    [ "BrandExp",        "ProductFeatures",       "18",  "17"  ],
                    [ "BrandExp",        "ProductBase",           "20",  "19"  ],
                    [ "BrandExp",        "SellingTools",          "22",  "21"  ],
                    [ "BrandExp",        "ContentBlocks",         "24",  "23"  ],
                    [ "BrandExp",        "Search",                "26",  "25"  ],
                    [ "BrandExp",        "ProdCat",               "28",  "27"  ],
                    [ "BrandExp",        "StoreLocator",          "30",  "29"  ],
                    [ "BrandExp",        "OAB",                   "32",  "31"  ],
                    [ "BrandExp",        "NavFooter",             "34",  "33"  ],
                    [ "BrandAssembly",   "Choose",                "", "" ],
                    [ "BrandAssembly",   "AssemblyTeam1",         "36",  "35"  ],
                    [ "BrandAssembly",   "AssemblyTeam2",         "38",  "37"  ],
                    [ "BrandAssembly",   "AssemblyTeam3",         "40",  "39"  ],
                    [ "BrandAssembly",   "AssemblyTeam4",         "42",  "41"  ],
                    [ "BrandAssembly",   "AssemblyTeam5",         "44",  "43"  ],
                    [ "BrandAssembly",   "AssemblyTeam6",         "46",  "45"  ],
                    [ "BrandAssembly",   "AssemblyTeam7",         "48",  "47"  ],
                    [ "BrandAssembly",   "AssemblyTeam8",         "424", "421" ],
                    [ "BrandAssembly",   "AssemblyTeam9",         "425", "422" ],
                    [ "EcommStardust",   "Choose",                "", "" ],
                    [ "EcommStardust",   "SDAccount",             "50",  "49"  ],
                    [ "EcommStardust",   "SDCartAndOffers",       "52",  "51"  ],
                    [ "EcommStardust",   "SDCheckout",            "54",  "53"  ],
                    [ "EcommStardust",   "SDCommunications",      "56",  "55"  ],
                    [ "EcommStardust",   "SDDatabase",            "58",  "57"  ],
                    [ "EcommStardust",   "SDFoundations",         "426", "423" ],
                    [ "EcommStardust",   "SDPayments",            "60",  "59"  ],
                    [ "EcommHybrid",     "Choose",                "", "" ],
                    [ "EcommHybrid",     "DGACAC",                "62",  "61"  ],
                    [ "EcommHybrid",     "DGCartAndOffers",       "64",  "63"  ],
                    [ "EcommHybrid",     "Loyalty",               "66",  "65"  ],
                    [ "EcommHybrid",     "OOFIS",                 "68",  "67"  ],
                    [ "EcommHybrid",     "RCO",                   "70",  "69"  ],
                    [ "AFT",             "Choose",                "", "" ],
                    [ "AFT",             "DevEx",                 "72",  "71"  ],
                    [ "AFT",             "FEFoundation",          "74",  "73"  ],
                    [ "AFT",             "DrupalApplication",     "76",  "75"  ],
                    [ "AFT",             "SEO",                   "78",  "77"  ],
                    [ "AFT",             "PGFoundation",          "80",  "79"  ],
                    [ "FeatureRollouts", "Choose",                "", "" ],
                    [ "FeatureRollouts", "RCORollout",            "82",  "81"  ],
                    [ "FeatureRollouts", "LoyaltyRollout",        "84",  "83"  ],
                    [ "FeatureRollouts", "OABRollout",            "86",  "85"  ],
                    [ "FeatureRollouts", "CartCleanupRollout",    "88",  "87"  ],
                    [ "FeatureRollouts", "ClickAndReserveRollout","90",  "89"  ],
                    [ "FeatureRollouts", "PromotionAndGifting",   "92",  "91"  ],
                    [ "FeatureRollouts", "SellingTools",          "94",  "93"  ],
                    [ "FeatureRollouts", "AccountCheckout",       "96",  "95"  ],
                    [ "FeatureRollouts", "SearchAndClientelling", "98",  "97"  ],
                    [ "Operations",      "Choose",                "", "" ],
                    [ "Operations",      "Team1",                 "100", "99"  ] ]

// Based on the value of the Train selscted, populate the team names
function trainChange() {
  var selectVal = document.getElementById("train").value;
  
  teamSelect = document.getElementById("team");
  var n = teamSelect.options.length
  for (var i=0; i < n ; i++) teamSelect.remove(0)

  var firstOption = true
  for (var i=0; i < trainTeam.length; i++) {
    if (trainTeam[i][0] == selectVal) {
	  // To set the first option as selected
	  if (firstOption) {
	    teamSelect.options[teamSelect.options.length] = new Option(trainTeam[i][1], trainTeam[i][1], false, true);
		firstOption = false
	  } else {
	    teamSelect.options[teamSelect.options.length] = new Option(trainTeam[i][1], trainTeam[i][1], false, false);
	  }
	}
  }
  
}

function genUrl() {

  let tag =""
  //var alltag = ""
  let locale ="";
  var brandOptions = document.getElementsByName("brands")[0].options;
  var localeOptions = document.getElementsByName("locales")[0].options;
  var platOptions = document.getElementsByName("platform")[0].options;
  let brandSelected = "";
  let localeSelected = "";
  let plat = "";
  let platSelected = "";
 for (let i=0;i<platOptions.length;i++){
 	if(platOptions[i].selected) {
		plat = platOptions[i].value;
  		console.log(platOptions[i].value);
	}
 }
  // To get the platform selection
  if (plat == "PC") {
		platSelected = "AccessibilityPC"
		console.log(plat);
	  } else {
	    platSelected = "AccessibilityMOB"
		console.log(plat);
	  }

  for (let i=0;i<brandOptions.length;i++){
 	if(brandOptions[i].selected) {
		brandSelected = brandOptions[i].value;
  		console.log(brandOptions[i].value);
		break;
	}
 }
 for (let i=0;i<localeOptions.length;i++){
 	if(localeOptions[i].selected) {
		localeSelected = localeOptions[i].value;
  		console.log(localeOptions[i].value);
		break;
	}
 }
if(tag=="" && !(localeSelected=="APAC" || localeSelected=="EMEA" || localeSelected=="LATAM")){
	tag = "( "+ brandSelected + " ) & ( " + localeSelected + " ) & ( " + platSelected + " ) " ;
}
else{
	alert("Locale selection is wrong. Please select the correct Locale!");
	tag = "Locale Error!"
}
  console.log(tag);
  // The following array is to map the Region to which the Country belongs to
  // The regions themselves are APAC, EMEA and LATAM which are in 3, 14 and 41 poaition
  var localesRegion = [ -1, -1, -1, -1,  3,  3,  3,  3,  3,  3,
                         3,  3,  3,  3, -1, 14, 14, 14, 14, 14,
                        14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
                        14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
                        14, -1, 41, 41, 41] 						

  
  

  // To get the train and team selection for Launch Name
  var trainTeamName = ""
  var teamName = ""
  var trainName = ""
  var selectTrain = document.getElementsByName("train")[0];
  var optionsTrain = selectTrain.options;
  for (var i=0; i < optionsTrain.length ; i++) {
    if (optionsTrain[i].selected) trainName = optionsTrain[i].value
  }
  
  var selectTeam = document.getElementsByName("team")[0];
  var optionsTeam = selectTeam.options;
  for (var i=0; i < optionsTeam.length ; i++) {
    if (optionsTeam[i].selected) teamName = optionsTeam[i].value
  }
  
  trainTeamName = trainName + "%2D" + teamName

  // Populate the tag based on the TC names selected and the platform selected
  
  //alltag = alltag + " & ( " + tag + " )"

  // Getting the launch description, defaulting if not entered, enclosing in doublequote and url encoding
  var launchVal = document.getElementById("launchdescription").value
  if (launchVal == "") launchVal = "GLBQA-10000"
  // Following line has to be commented when Jenkins worker is on Unix / Linux environemnt
  // launchVal = "\"" + launchVal + "\""
  launchVal = encodeURI(launchVal)
  launchVal = launchVal.replaceAll("&", "%26")
  

  // To get the environment selection
  var selectENV = document.getElementsByName("environment")[0];
  var optionsENV = selectENV.options;
  var envVal = "PROD"
  if (optionsENV[0].selected) envVal = "PROD"
  if (optionsENV[1].selected) envVal = "PREPROD"
  if (optionsENV[2].selected) envVal = "STAGE"
  if (optionsENV[3].selected) envVal = "DEV"
  if (optionsENV[4].selected) envVal = "FEAT"
  if (optionsENV[5].selected) envVal = "ENG"
  if (optionsENV[6].selected) envVal = "PREVIEW"

  // Env is also added to the Train Team name
  trainTeamName = trainTeamName + "%2D" + "GACC" + "%2D" + envVal

  // To get the perlgem selection
  var selectPGM = document.getElementsByName("perlgem")[0];
  var optionsPGM = selectPGM.options;
  var pgmVal = "preprod"
  if (optionsPGM[0].selected) pgmVal = "preprod"
  if (optionsPGM[1].selected) pgmVal = "stage"
  if (optionsPGM[2].selected) pgmVal = "dev"

  // To get the perlgem selection
  var selectAPI = document.getElementsByName("apienv")[0];
  var optionsAPI = selectAPI.options;
  var apiVal = "qa"
  if (optionsAPI[0].selected) apiVal = "qa"
  if (optionsAPI[1].selected) apiVal = "production"
  if (optionsAPI[2].selected) apiVal = "uat"
  if (optionsAPI[3].selected) apiVal = "integration"

  // Get the Jira Id and Revision Tag
  var jiraidVal = document.getElementById("jiraid").value
  jiraidVal = encodeURI(jiraidVal)
  jiraidVal = jiraidVal.replaceAll("&", "%26")
  var ncsaNumVal = document.getElementById("ncsaservernumber").value
  ncsaNumVal = encodeURI(ncsaNumVal)
  ncsaNumVal = ncsaNumVal.replaceAll("&", "%26")
  
  var revtagVal = document.getElementById("revisiontag").value
  revtagVal = encodeURI(revtagVal)
  revtagVal = revtagVal.replaceAll("&", "%26")

  //
  // From the tagVals array and the value in Brand Locale Test find the number of specs which will match
  // Absolute match is achieved by checking for availability of " RU " rather than "RU" to avoid
  // partial string match into "RUPC". Similarly for "GUPC" and "ENEGUPC" etc.
  //
  // Brand Locale and Test are individually compared so that Brand CL and Locale CL do not mix up
  // After Locale CL is fully renamed to Locale CE it is not needed, but given to handle transition
  //

  
  // The approx time to execute is calculated by number of test / number of thread and multiply by 2 min which average time to run
  // We take the ciel since, when the number of threads is 8, time to exec 1 test or 8 test will be 2 min

  // Following line has to be commented when Jenkins worker is on Unix / Linux environemnt
  // alltag = "\" " + alltag + " \""
  //document.getElementById("tagvalue").innerHTML = " <p><b>Number of test chosen for execution :" + matchingSpec + "<br> <b > Approximate time to complete execution :" + timeToRun + " minutes </b>" + "<br></p>"
  url = "token=token2105&LAUNCHDESCP="
  tag = encodeURI(tag)
  tag = tag.replaceAll("&", "%26")
  console.log(tag)

  // If the Environment is Stage or Feature, RevisionTag is added
  var selectVal = document.getElementById("environment").value;
  var addlVal = ""
  if (selectVal == "STAGE" || selectVal == "FEAT" || selectVal == "DEV" || selectVal == "PREVIEW" ) {
    addlVal = addlVal + "&REVISIONTAG=" + revtagVal + "&APIENV=" + apiVal
  }

  // If the Environment is Feature, PerlGem and JiraId are added  
  if (selectVal == "FEAT") {
    addlVal = addlVal + "&JIRAID=" + jiraidVal + "&PERLGEMENV=" + pgmVal
  }

  if (selectVal == "PREVIEW") {
    addlVal = addlVal + "&JIRAID=" + jiraidVal
  }

  // If the Environment is ENG, NCSAServerNumber and JiraId are added  
  if (selectVal == "ENG") {
    addlVal = addlVal + "&JIRAID=" + jiraidVal + "&NCSASERVERNUM=" + ncsaNumVal 
  }
  
  // The url params are gathered into a string and will be passed to another page which will use 
  // this url to call within a iframe
  // multiple pass and get with url encode alone is running into issues
  // hence the parameters are base 64 encoded before we pass to the page which has the iframe
  
  urlParams = url + launchVal + "&LAUNCHNAME=" + trainTeamName + "&TAGVALUE=" + tag + "&ENVIRONMENT=" + envVal + "&RETRYCOUNT=" + "1" + addlVal
  console.log(urlParams)
  encUrlParams = window.btoa(urlParams)
  
  // The result id is also found and passed in the url
  var resultId = ""
  var trainTeamIndex = findTrainTeamIndex()
  if (trainTeamIndex != -1) {
    resultId = trainTeam[trainTeamIndex][3]
  }

  encUrlParams = "./ADATestRun.html?callParam=" + encUrlParams + "&resultId=" + resultId
  document.getElementById("urlvalue").innerHTML = encUrlParams
  document.getElementById("urlvalue").innerHTML.fontcolor('#FFFFFF');
  console.log(encUrlParams)
}

function startTest() {
  genUrl();
  var testUrl = document.getElementById("urlvalue").innerHTML;

  if (testUrl == "") { 
    alert("Please click Check Script Availability and then start test..");
  } else {
      testUrl = testUrl.replaceAll("&amp;","&")
      window.open(
        testUrl,
        '_blank' 
      );
  }
}

function findTrainTeamIndex() {
  var trainVal = document.getElementById("train").value;
  var teamVal = document.getElementById("team").value;
  if (trainVal == "Choose" || teamVal == "Choose") return -1;
  for (var i=0; i < trainTeam.length; i++) {
    if (trainTeam[i][0] == trainVal && trainTeam[i][1] == teamVal) return i;
  }
  return -1;
}

function openPage(pageName,elmnt,check) {
  var i, tabcontent, tablinks;
  if(elmnt == "env" || elmnt == "oc")
  {
    //let select = document.getElementsByName("brands")[0];
  // To get the train and team selection for Launch Name
  let trainTeamName = ""
  let teamName = ""
  let trainName = ""
  let selectTrain = document.getElementsByName("train")[0];
  let optionsTrain =  selectTrain.options;
  //trainName = optionsTrain[0].value;
  for (var i=0; i < optionsTrain.length ; i++) {
    if (optionsTrain[i].selected) trainName = optionsTrain[i].value
  }
  
  if (trainName == "Choose") {
    alert("Select the Train name")
	return
  }
  let selectTeam = document.getElementsByName("team")[0];
  let optionsTeam = selectTeam.options;
  for (var i=0; i < optionsTeam.length ; i++) {
    if (optionsTeam[i].selected) teamName = optionsTeam[i].value
  }
  //teamName = optionsTeam[0].value;
  console.log(trainName, teamName);
  
  if (teamName == "Choose") {
    alert("Select the Team name")
	return
  }
  lnchVal = document.getElementById("launchdescription").value
  if (lnchVal == "") {
    alert("Release name should be entered")
	return
  }
  }
  if (check == 1)
  {
    genUrl();
  }
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) 
  {
    //tablinks[i].disabled=true;
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "white";
    tablinks[i].style.fontWeight = "";
  }
  //document.getElementById(pageName).style.display = "block";
  //elmnt.style.backgroundColor = "black";
  document.getElementById(elmnt).style.backgroundColor="rgb(209, 212, 220)";
  document.getElementById(elmnt).style.color="black";
  document.getElementById(elmnt).style.fontWeight="bold";
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("scp").click();

function goHome(){
  document.location.href="../../index.html";
}

function goAccessibilityHome(){
  document.location.href="ADAindex.html";
}
