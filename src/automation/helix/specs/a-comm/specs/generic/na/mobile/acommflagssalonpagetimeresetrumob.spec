# Running A-Comm Validation Mobile Test 

    |user_type|
    |---------|
    |    V    |
    |    Y    |
    |    S    |
    |   HMV   |
    |   V12   |
    |   Y12   |
    |   S12   |
    |  HMV12  |

## As a Return User i would like to Add a product and complete checkout for MOBILE
* A-COMM Initialize Helix
* NAACCCHK Initialize Helix
* A-COMM Assign the Email Address based On <user_type> 
* NAACCCHK Set cookies, TestOrder flag, set revision tag
* A-COMM AC Need To Open LogIn Link 
* A-COMM Return User Login Details with Submit
* A-COMM Open Web Page "SalonPage" 
* A-COMM Verify Salon Logo
* A-COMM Add a product to Cart from "SalonPage"
* A-COMM Open My Salon tool in a new tab 
* A-COMM Switch to My Salon Tool and verify the Flags and other details
* A-COMM Switch back to the cart page 
* NAACCCHK Verify that the user is able to proceed to Cart Merge Checkout successfully
* NAACCCHK Verify that the user is able to enter the shipping details successfully
* NAACCCHK Verify that the user is able to select the payment method successfully
* NAACCCHK Verify that the user is able to place the order successfully
* A-COMM Open Web Page "SalonPage" 
* A-COMM Add a product to Cart from "SalonPage"
* A-COMM Open My Salon tool in a new tab 
* A-COMM Switch to My Salon Tool and verify the Flags and other details
* A-COMM Expire the time in My Salon Tool
* A-COMM Switch back to the cart page 
* NAACCCHK Verify that the user is able to proceed to Cart Merge Checkout successfully
* NAACCCHK Verify that the user is able to enter the shipping details successfully
* NAACCCHK Verify that the user is able to select the payment method successfully
* NAACCCHK Verify that the user is able to place the order successfully
* A-COMM Get the Transcation ID
* A-COMM Open A-Comm tool 
* A-COMM Switch to A-Comm and Verify the Flags and other details on A-Comm tool

