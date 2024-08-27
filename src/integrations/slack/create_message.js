/*

	This program will get result.xml, threshold, githubRunid, githubRepository, slackSecret as input
	The slack message json will be created based on that

						Data which is in result.xml
						Multiple testcase will be there under testsuite
						In case of failure, in addition to system-out, there will be field called failure

<testsuites id="" name="" tests="10" failures="1" skipped="0" errors="0" time="181.990938">
<testsuite name="checkout/checkout_global.spec.js" timestamp="2023-09-14T07:25:03.781Z" hostname="Google Chrome1" tests="10" failures="1" skipped="0" time="760.699" errors="0">
<testcase name="DA-BE-PC AS A GUEST USER I LIKE TO ADD PRODUCT AND COMPLETE CHECKOUT FLOW @GU" classname="checkout/checkout_global.spec.js" time="60.684">
<system-out>
<![CDATA[ViewPort on PC
The Product with SKU42289 is NOT available for adding it to Cart
next iteration
The Product with SKU96509- is available and proceeding to add to Cart
/product/21746/60685/skincare/category/oil-oil-hybrid/essential-oil-elixir--rose-aromatic-care/ultimate-nourishment-and-radiance-with-a-triple-rose-blend
In PDP
Cart count value is : 1
Product added to cart
Element did not appear hence it is skipped
Generated MailId: jei8fif8e5@test.com
Credit Card Number: 4111 1111 1111 1111
Order Created successfully:Uw bevestigingsnummer is  2503312519.
]]>
</system-out>
</testcase>
</testsuite>
</testsuites>

*/


const xml2js = require('xml2js');
var fs3 = require('fs');
var myArgs = process.argv.slice(2);
var inputThreshold = myArgs[1];
var fs = require('fs');


// This function creates the slack message json string
function createSlackMessage(xmlData, threshold, githubRunid, githubRepository) {

  var totalTests = 0;
  var failedTests = 0;
  var slackMessage = "";
  var numOfSuites = 0;
  var fullBLName = "";
  var blArray = [];
  var brand = "";
  var locale = "";
  var platform = "";
  var fullTCName = "";
  var tcArray = [];
  var tcName = "";
  var passedTests = 0;
  var passPercent = 0;
  var fullStatus = "";

  slackMessage = "{ text:\"*ELCelerate GitHub Actions alert...*\\n";

  xml2js.parseString(xmlData, (err, result) => {

    numOfSuites = result.testsuites.testsuite[0]["testcase"].length;

    for (let i = 0; i < numOfSuites; i++) {

      totalTests++;

      // Find whether test has failed using the presence of failure
      if ( Object.prototype.hasOwnProperty.call(result.testsuites.testsuite[0].testcase[i], 'failure') )
        failedTests++;

      // Get Brand Locale Platform and Test from name, which is like
      //     DA-BE-PC AS A GUEST USER I LIKE TO ADD PRODUCT AND COMPLETE CHECKOUT FLOW @GU
      //
      fullBLName = result.testsuites.testsuite[0].testcase[i].$.name;
      blArray = fullBLName.split(" ");
      fullBLName = blArray[0];
      blArray = fullBLName.split("-");
      brand = blArray[0];
      locale = blArray[1];
      platform = blArray[2];

      // Find the TC name using the classname
      fullTCName = result.testsuites.testsuite[0].testcase[i].$.classname;
      tcArray = fullTCName.split("/");
      tcName = tcArray[0];

      // Add message line for failed tests
      if ( Object.prototype.hasOwnProperty.call(result.testsuites.testsuite[0].testcase[i], 'failure') )
        slackMessage = slackMessage + "*" + brand + " " + locale + " " + tcName + " " + platform + " failed*\\n";

    }

    passedTests = totalTests - failedTests;

    // Find the full status based on total tests, passed tests and threshold
    if (totalTests === 0) {
      passPercent = 100;
      fullStatus = "PASSED";
    } else {
      passPercent = Math.ceil( (passedTests / totalTests) * 100 );
      if ( passPercent >= threshold )
      {
        fullStatus = "PASSED";
      } else {
        fullStatus = "FAILED";
      }
    }

    console.log(fullStatus);

    // Include url and summary to the message
    slackMessage = slackMessage + "https://github.com/" + githubRepository + "/actions/runs/" + githubRunid + " ";
    slackMessage = slackMessage + "```";
    slackMessage = slackMessage + "Total tests  :- " + totalTests + "\\n";
    slackMessage = slackMessage + "Passed tests :- " + passedTests + "\\n";
    slackMessage = slackMessage + "Threshold    :- " + threshold + "%\\n";
    slackMessage = slackMessage + "Pass %       :- " + passPercent + "%\\n";
    slackMessage = slackMessage + "Status       :- " + fullStatus + "\\n";
    slackMessage = slackMessage + "``` \" }";

    // Write the message to the json file
    fs3.writeFileSync("message.json", slackMessage, { encoding: 'utf8' });

  });

}


// If empty string or spaces or non numbers is passed for threshold, it is taken as 100
if (inputThreshold.trim().length === 0) inputThreshold = "100";
inputThreshold = parseInt(inputThreshold);
if (isNaN(inputThreshold)) inputThreshold = 100;

// If the slack secret is empty string, do not process further
if (myArgs[4].trim().length !== 0) {

  const xmlData = fs.readFileSync(myArgs[0], { encoding: 'utf8' });
  createSlackMessage(xmlData, inputThreshold, myArgs[2], myArgs[3]);

}
