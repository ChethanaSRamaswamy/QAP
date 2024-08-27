/*

	This program will get result.xml and threshold value
	If the % of passed test is greater than or equal to threshold it returns success
	If the % of passed test is lesser than threshold it returns failure
	If empty string or spaces or non numbers is passed for threshold, it is taken as 100

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

var myArgs = process.argv.slice(2);
var inputThreshold = myArgs[1];
var fs = require('fs');
var testStatus = 0;


function findResult(xmlData, threshold, callback) {

  var totalTests = 0;
  var failedTests = 0;
  var passedTests = 0;
  var numOfSuites = 0;
  var returnValue = 0;

  xml2js.parseString(xmlData, (err, result) => {

    numOfSuites = result.testsuites.testsuite[0]["testcase"].length;

    for (let i = 0; i < numOfSuites; i++) {

      totalTests++;

      // Find whether test has failed using the presence of failure
      if ( Object.prototype.hasOwnProperty.call(result.testsuites.testsuite[0].testcase[i], 'failure') )
        failedTests++;

    }

    passedTests = totalTests - failedTests;

    console.log("Test Results");
    console.log("Threshold%   :- ", threshold);
    console.log("Total tests  :- ", totalTests);
    console.log("Passed tests :- ", passedTests);

    if (totalTests === 0) {

      returnValue = 0;

    } else {

      passedTests = Math.ceil( (passedTests / totalTests) * 100 );
      console.log("Pass%        :- ", passedTests);
      console.log("End of Test Results");

      if ( passedTests >= threshold ) {
        returnValue = 0;
      } else {
        returnValue = 1;
      }

    }

    callback(returnValue);

  });

}


// If empty string or spaces or non numbers is passed for threshold, it is taken as 100
if (inputThreshold.trim().length === 0) inputThreshold = "100";
inputThreshold = parseInt(inputThreshold);
if (isNaN(inputThreshold)) inputThreshold = 100;

const xmlData = fs.readFileSync(myArgs[0], { encoding: 'utf8' });

findResult(xmlData, inputThreshold, function(retValue) {
  testStatus = retValue;
});

process.exitCode = testStatus;
