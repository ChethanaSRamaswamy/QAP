# Running ROM Return User PC Test AfterPay


     |set_no|
     |------|
     |0     |

## As a ROM Return User i would like to Add a product and complete checkout for PC by AfterPay
* ROM Initialize Helix <set_no>
* ROM Set BrandLocale variables 
* ROM Set Cookies 
* ROM Mltiple Product Add to the cart 
* ROM Cart Popup Close
* ROM CookieRejectButton
* ROM Validate in Cartpage or not 
* ROM Cart Popup Close
* ROM Select Shipping Type
* ROM Select QTY increase
* ROM Free Gift Wrap
* ROM Click On Continue Checkout Button and Navigate to Samples/Sign In page
* ROM Cart Popup Close
* ROM Click On Sample Page1 Continue Button and Proceed to Samples/SignIn Page
* ROM Signup Popup Close
* ROM Click On Return User Header Tab to Enter Return User Details
* ROM Enter Return User Email Id Details and Navigate to Cart Merge Checkout/Order Review Page
* ROM Cart Merge Checkout
* ROM Click Cart Merge Sample Checkout
* ROM Click On Return User Shipping Details Edit Link
* ROM Click On Return User Add New Address Button/Link
* ROM Choose Shipping Method
* ROM Enter shipping address
* ROM Return User Payment Link Text
* ROM Return User New Payment Radio button
* ROM AF Select Afterpay
* ROM Click on Use Billing address
* ROM AF Continue Afterpay
* ROM AF Click LoginAfterPay
* ROM AF Enter Email
* ROM AF Continue To Proceed
* ROM AF Enter Password
* ROM AF Continue To Login
* ROM AF Click on SubmitAfterpay
* ROM Return User select address
* ROM PP Click On Guest User / New User / Return Place Order
* ROM PP Place order validation
* ROM Get Order Confirmation ID
* ROM Write Data to DataStore "Return"
