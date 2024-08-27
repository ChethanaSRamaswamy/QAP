# Running Guest User Gift Wrap Invalid Message MOB Test

## Verify Guest User is getting Warning Message when Invalid Message entered

* UKACCCHK Initialize Helix
* UKPAYMENT Initialize Helix
* UKACCCHK Configure Pre-Requisites
* UKPAYMENT Verify that the user able to add products into cart
* UKACCCHK Verify that the user is able to view and update the cart
* UKPAYMENT Verify that the user able to signin as a guest user
* UKPAYMENT Verify that the user able to Enable the Gift Wrap and enter the Valid/Invalid message "invalidGiftMessage"
* UKACCCHK Verify that the user is able to enter the user shipping details successfully "GU"
* UKPAYMENT Verify the Gift Wrap Invalid message and Unselect the Gift Wrap