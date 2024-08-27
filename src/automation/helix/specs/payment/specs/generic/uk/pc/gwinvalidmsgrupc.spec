# Running Return User Gift Wrap Invalid Message PC Test

## Verify Return User is getting Warning Message when Invalid Message entered

* UKACCCHK Initialize Helix
* UKPAYMENT Initialize Helix
* UKACCCHK Configure Pre-Requisites
* UKPAYMENT Verify that the user able to add products into cart
* UKACCCHK Verify that the user is able to view and update the cart
* UKPAYMENT Verify that the user able to signin as a return user
* UKPAYMENT Verify that the user able to Enable the Gift Wrap and enter the Valid/Invalid message "invalidGiftMessage"
* UKACCCHK Verify that the user is able to enter the user shipping details successfully "RU"
* UKPAYMENT Verify the Gift Wrap Invalid message and Unselect the Gift Wrap
