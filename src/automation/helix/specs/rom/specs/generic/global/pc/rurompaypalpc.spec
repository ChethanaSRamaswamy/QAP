# Running ROM Guest User PC Paypal Test 

     |set_no|
     |------|
     |0     |
    

## As a ROM Return User i would like to Add a product and complete checkout for PC by Paypal
* ROM Initialize Helix <set_no>
* ROM Set BrandLocale variables 
* ROM Set Cookies 
* ROM Add Product to the cart 
* ROM Cart Popup Close
* ROM CookieRejectButton
* ROM Validate in SPP or not 
* ROM Add product to Bag in SPP
* ROM Navigate to cart page by clicking on Cart overlay 
* ROM Cart Popup Close
* ROM Select Shipping Type
* ROM Select QTY increase
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
* ROM PP Select Paypal
* ROM PP Continue Paypal
* ROM PP Enter Email
* ROM PP Continue To Proceed
* ROM PP Enter Password
* ROM PP Continue To Login
* ROM PP Click on ConfirmPaymentPaypal
* ROM Click on Use Billing address
* ROM Return User select address
* ROM PP Click On Guest User / New User / Return Place Order
* ROM PP Removing popup after placing order
* ROM PP Place order validation
* ROM Get Order Confirmation ID
* ROM Write Data to DataStore "Guest"
