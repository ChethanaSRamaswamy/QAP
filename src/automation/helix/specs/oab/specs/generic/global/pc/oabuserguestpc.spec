# OAB PC OABUSERGUESTPC

## Book appointment for Guest User
* OAB SD Initialize Helix
* OAB AppHQ Initialize Helix
* OAB SD Configuring the prerequisites like set cookies, revision tag
* OAB SD If dual language settings
* OAB SD Close Durpal Bar
* OAB SD Open website for Appointment Booking "no api"
* OAB SD Select the appointment type "OAB"
* OAB SD Select any available service
* OAB SD Select date & time of the appointment
* OAB SD Assert appointment details on review page to previous steps "OAB"
* OAB SD Enter user first and last name "test"
* OAB SD Enter guest email "first time"
* OAB SD Enter phone number
* OAB SD Enter CPF number "Guest"
* OAB SD Check Terms & conditions and Privacy Policy checkbox
* OAB SD Click book the appointment button with intercept
* OAB SD Check if confirmation page appeared
* OAB SD Get appointment details from Confrimation page "OAB"
* OAB SD Assert confirmation appointment details to the previous steps for "OAB"

Assert if deails were correctly transerred to Appts HQ for not registered quest user
* OAB AppHQ Go to Appointment HQ page
* OAB AppHQ Log in into Appointment HQ with "correct" credencials
* OAB AppHQ Select brand, country and "OAB" store
* OAB AppHQ Search Appointment for a "Guest User" with "api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Get appointment details from modal "OAB"
* OAB AppHQ Close modal window
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Dual Langage second service name check
* OAB AppHQ Assert customer details from Confirmation page to Appointment modal "not test"
* OAB AppHQ Assert selected service details from Confirmation page to Appointment modal "OAB"

Create account and check if appointment was properly transferred to My appointments page
* OAB SD Switch to "Book Appointment"
* OAB SD Navigate to the account login page
* OAB SD Create account "after OAB"
* OAB SD Navigate to the My appointments
* OAB SD Get appointment details from My appointments page "OAB" when appointment created in "FE"
* OAB SD Assert service details from Confirmation page to My appointments page for "OAB"
* OAB SD Click cancel appointment button
* OAB SD Get details of cancelled appointent "OAB"
* OAB SD Assert service details from Confirmation page to Cancelation popup for "OAB"
* OAB SD Close cancel pop-up and check if it was removed from the page