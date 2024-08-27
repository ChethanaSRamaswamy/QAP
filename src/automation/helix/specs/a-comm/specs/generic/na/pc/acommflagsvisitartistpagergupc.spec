
# Running A-Comm Validation PC Test 
    
    |user_type|
    |---------|
    | NewUser |

## As a Guest User i would like to Add a product and complete checkout for PC
* A-COMM Initialize Helix
* NAACCCHK Initialize Helix
* A-COMM Assign the Email Address based On <user_type>
* NAACCCHK Set cookies, TestOrder flag, set revision tag
* A-COMM Open Web Page "ArtistPage" 
* A-COMM Verify Salon Logo
* A-COMM Add a product to Cart from "ArtistPage" 
* A-COMM Open My Salon tool in a new tab 
* A-COMM Switch to My Salon Tool and verify the Flags and other details
* A-COMM Switch back to the cart page 
* NAACCCHK Verify that the user is able to add products to the cart successfully
* NAACCCHK Verify that the user is able to view and update the cart
* NAACCCHK Verify that the user is able to proceed to Sign in successfully
* NAACCCHK Verify that the user is able to enter the shipping details successfully
* NAACCCHK Verify that the user is able to select the payment method successfully
* NAACCCHK Verify that the user is able to place the order successfully
* A-COMM Get the Transcation ID
* A-COMM Open A-Comm tool in a new tab 
* A-COMM Switch to A-Comm and Verify the Flags and other details on A-Comm tool
* A-COMM Reset the table

