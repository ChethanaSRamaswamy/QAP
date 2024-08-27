# Running RCO Guest User Restricted Product PC Test 

## Validate Checkout for California or APO Address using restricted products
* NARCO Initialize Helix
* NAACCCHK Initialize Helix
* NAACCCHK Set cookies, TestOrder flag, set revision tag
* NARCO Verify that the user is able to add restricted product to the cart
* NAACCCHK Verify that the user is able to proceed to Sign in successfully
* NARCO Verify that the user is able to Enter the California Shipping Details
* NARCO Verify that the user is able to Validate the California Address
* NARCO Verify that the user is able to Enter the APO ZIPCODE
* NARCO Verify that the user is able to Click on Continue to Payment
* NARCO Verify that the user is able to validate the APO address