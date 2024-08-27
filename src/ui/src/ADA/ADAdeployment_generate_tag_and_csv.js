//
// This file is to get the generated CSV file (by the file GetTagLines.bat) with tags as input
// The strings Tags: and Regression, will be filtered
// Only those lines where the TC Name tag is present in the list of TC's will be included in the output
// The output will be in the format of tagvalues.js
// The input file and output file will be got as command line param
//
// Another output generated is the CSV file to be used in confluence
// After the same filteration data is looked up from deployment_data and the CSV is createDocumentFragment
// The input CSV is got as command line param
//

// get the data from the deployment_data file
const depData = require("./ADAdeployment_data");


// This will check if the tag is available in the list of Test cases
function checkBrandLocaleTagAvailable(tagName, brandName, localeName) {

	// Check if the tag exists in the PC tags or the Mobile tags
	arrayLen = depData.tcName.length
	tagAvailable = false
	for (j=0; j<arrayLen ; j++)
	    if ( (depData.tcName[j][3] == tagName) || (depData.tcName[j][4] == tagName) ) tagAvailable = true
		
	// Check if the Brand exists
	brandLen = depData.brandName.length
	brandAvailable = false
	for (k=0; k<brandLen ; k++)
	    if (depData.brandName[k][0] == brandName) brandAvailable = true
	    
	// Check if the Locale exists
	localeLen = depData.localeName.length
	localeAvailable = false
	for (l=0; l<localeLen ; l++)
	    if (depData.localeName[l][0] == localeName) localeAvailable = true
	
    // To know which are the ones getting skipped	
	if ( ! (tagAvailable && brandAvailable && localeAvailable) ) console.log(tagName, brandName, localeName)
		
	return tagAvailable && brandAvailable && localeAvailable
}

// CSV data is processed and tagvalues data created by this method
function transformToTagvalues(csvData) {
	
	outputData = ""
	outputData = outputData + "let tagVals = [" + "\n"
	
    csvDataLines = csvData.split("\n")
	for (i=0 ; i < csvDataLines.length ; i++) {
		
		// Remove the Tags: and Regression, from the lines
		csvDataLines[i] = csvDataLines[i].replace("Tags:", "")
		csvDataLines[i] = csvDataLines[i].replace("Regression,", "")
		
		lineData = csvDataLines[i].split(",")
		//console.log("I am lineData : " + lineData)
		if (lineData.length == 3)
		{
			if (checkBrandLocaleTagAvailable(lineData[2].trim(), lineData[0].trim(), lineData[1].trim())) {
		        csvDataLines[i] = "['" + lineData[0].trim() + "', '" + lineData[1].trim() + "', '" + lineData[2].trim() + "'],"
				outputData = outputData + csvDataLines[i] + "\n"
				console.log("Inside the IF:" + outputData);
			}
		} else {
			// To know which are the ones getting skipped
			console.log("Inside the ELSE:" + outputData);
			console.log(csvDataLines[i])
		}

	}

    outputData = outputData + "];" + "\n"
	//console.log("I am about to return: \n" + outputData )
	return outputData
}

// From the Brand short name get the Brand long name
function findBrandName(brandName) {
	arrayLen = depData.brandName.length
	for(j=0; j<arrayLen; j++) {
		if (depData.brandName[j][0] == brandName) return depData.brandName[j][1]
	}
	return "ZZ"+brandName
}

// From the Locale short name get the Region long name
function findRegionName(localeName) {
	arrayLen = depData.localeName.length
	for(j=0; j<arrayLen; j++) {
		if (depData.localeName[j][0] == localeName) return depData.localeName[j][1]
	}
	return "ZZ"+localeName
}

// From the Locale short name get the Locale long name
function findLocaleName(localeName) {
	arrayLen = depData.localeName.length
	for(j=0; j<arrayLen; j++) {
		if (depData.localeName[j][0] == localeName) return depData.localeName[j][2]
	}
	return "ZZ"+localeName
}

// From the Test tag find the Feature
function findFeatureName(testTag) {
	arrayLen = depData.tcName.length
	for(j=0; j<arrayLen; j++) {
		if ( (depData.tcName[j][3] == testTag) || (depData.tcName[j][4] == testTag) ) return depData.tcName[j][1]
	}
	return "ZZ"+testTag
}

// From the Test tag find the Scenario
function findScenarioName(testTag) {
	arrayLen = depData.tcName.length
	for(j=0; j<arrayLen; j++) {
		if ( (depData.tcName[j][3] == testTag) || (depData.tcName[j][4] == testTag) ) return depData.tcName[j][2]
	}
	return "ZZ"+testTag
}

// From the Test tag find whether PC or Mobile
function findPCorMObile(testTag) {
	arrayLen = depData.tcName.length
	for(j=0; j<arrayLen; j++) {
		if (depData.tcName[j][3] == testTag) return "PC"
		if (depData.tcName[j][4] == testTag) return "Mobile"
	}
	return "ZZ"+testTag
}

// CSV data is processed and data for CoverageData.csv is generated
function transformToCoverageCSV(csvData) {
	outputCoverageData = ""
	outputCoverageData = outputCoverageData + "\"Brand\",\"Region\",\"Country\",\"PC/Mobile\",\"Feature\",\"TestScenario\"" + "\n"

    csvDataLines = csvData.split("\n")
	for (i=0 ; i < csvDataLines.length ; i++) {
		
		// Remove the Tags: and Regression, from the lines
		csvDataLines[i] = csvDataLines[i].replace("Tags:", "")
		csvDataLines[i] = csvDataLines[i].replace("Regression,", "")
		
		lineData = csvDataLines[i].split(",")
		if (lineData.length == 3)
		{
			if (checkBrandLocaleTagAvailable(lineData[2].trim(), lineData[0].trim(), lineData[1].trim())) {

                // Brand  Region  Country  PC/Mobile  Feature  TestScenario
			
				brandLongName  = findBrandName(lineData[0].trim())
				regionLongName = findRegionName(lineData[1].trim())
				localeLongName = findLocaleName(lineData[1].trim())
				pcOrMobile     = findPCorMObile(lineData[2].trim())
				featureName    = findFeatureName(lineData[2].trim())
				scenarioName   = findScenarioName(lineData[2].trim())
				
				outputCoverageData = outputCoverageData + "\"" + brandLongName  + "\"," 
				                                        + "\"" + regionLongName + "\"," 
														+ "\"" + localeLongName + "\"," 
														+ "\"" + pcOrMobile     + "\"," 
														+ "\"" + featureName    + "\"," 
														+ "\"" + scenarioName   + "\"\n" 
			}
		}

	}

	return outputCoverageData
}


// get the input and output file from command line params
var myArgs = process.argv.slice(2);

console.log("    ")
console.log("Input CSV file           :-", myArgs[0])
console.log("Output Tag data JS file  :-", myArgs[1])
console.log("Output CSV file          :-", myArgs[2])
console.log("    ")

if (myArgs.length < 3) {
	console.log("******** Error, the usage of deployment_generate_tag_and_csv.js is")
	console.log("node deployment_generate_tag_and_csv.js test.csv ADAtagvalues.js ADACoverageData.csv")
	process.exit()
}

var fs1 = require('fs'); 
fs1.readFile(myArgs[0], 'utf8', function(err, csvData){ 
	// console.log(csvData);

    outputData = transformToTagvalues(csvData)
	outputCoverageData = transformToCoverageCSV(csvData)
	
	fs2 = require('fs');
	fs2.writeFile(myArgs[1], outputData, 'utf8', function (err) {
		if (err) return console.log(err);
		console.log('Tag file ' + myArgs[1] + ' is generated');
	});

	fs3 = require('fs');
	fs3.writeFile(myArgs[2], outputCoverageData, 'utf8', function (err) {
		if (err) return console.log(err);
		console.log('CSV file ' + myArgs[2] + ' is generated');
	});
	
});	 
