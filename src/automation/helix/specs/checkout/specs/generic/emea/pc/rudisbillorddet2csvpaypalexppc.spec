# Running PayPal Express PC Checkout

## As a Return User I would like to place order using PayPal Express payment method for PC
* EMEAACCCHK Initialize Helix
* EMEAACCCHKREG Initialize Helix
* EMEAACCCHKREG Set BrandLocale variables
* EMEAACCCHK Verify that the user is able to set default cookies, revision-tags, test-order flags, and popups
* EMEAACCCHKREG Click on My Account link in Home Page, Navigate to Account Index Page and then Login as Existing Return User
* EMEAACCCHK Verify that the user is able to add products to the cart
* EMEAACCCHK Verify that the user is able to view and update the cart
* EMEAACCCHKREG Verify that the user is able to increase the QTY and apply "Percentage Discount"
* EMEAACCCHKREG Verify that the user is able to checkout with PayPal from the viewcart page and place an order
* EMEAACCCHKREG Get Order Confirmation ID and Transaction ID
* EMEAACCCHKREG Click Order ID and Navigate to Order details
* EMEAACCCHKREG Get Order and Account Details and Write Data to DataStore "Return"