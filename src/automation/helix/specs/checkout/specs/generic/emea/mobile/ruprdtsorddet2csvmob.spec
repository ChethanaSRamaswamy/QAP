# Running Return User MOB Test 

## As a Return User i would like to Add a product and complete checkout for MOBILE
* EMEAACCCHK Initialize Helix
* EMEAACCCHKREG Initialize Helix
* EMEAACCCHKREG Set BrandLocale variables
* EMEAACCCHK Verify that the user is able to set default cookies, revision-tags, test-order flags, and popups
* EMEAACCCHK Verify that the user is able to add products to the cart
* EMEAACCCHK Verify that the user is able to add two products to the cart
* EMEAACCCHKREG Navigate to cart page by clicking on Cart overlay
* EMEAACCCHK Verify that the user is able to view and update the cart
* EMEAACCCHK Verify that the user is able to navigate to the sign-in page
* EMEAACCCHK Verify that the user is able to enter the return user details
* EMEAACCCHK Verify that the user is able to enter the "ReturnUser" shipping details
* EMEAACCCHK Verify that the user is able to select the payment method for "ReturnUser" and place an order
* EMEAACCCHKREG Get Order Confirmation ID and Transaction ID
* EMEAACCCHKREG Click Order ID and Navigate to Order details
* EMEAACCCHKREG Get Order and Account Details and Write Data to DataStore "Return"