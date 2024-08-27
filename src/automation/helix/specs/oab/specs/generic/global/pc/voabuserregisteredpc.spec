# VOAB PC VOABUSERREGISTEREDPC

## Book VOAB appointment as a registered user
* OAB SD Initialize Helix
* OAB AppHQ Initialize Helix
* OAB SD Configuring the prerequisites like set cookies, revision tag
* OAB SD If dual language settings
* OAB SD Close Durpal Bar
* OAB SD Set timezone
* OAB SD Open website for Appointment Booking "no api"
* OAB SD Select the appointment type "VOAB"
* OAB SD Select any available service
* OAB SD Select date & time of the appointment
* OAB SD Assert appointment details on review page to previous steps "VOAB"
* OAB SD Enter user first and last name "test"
* OAB SD Enter registered user email
* OAB SD Enter phone number
* OAB SD Enter CPF number "Registred"
* OAB SD Check Terms & conditions and Privacy Policy checkbox
* OAB SD Click book the appointment button with intercept
* OAB SD Check if confirmation page appeared
* OAB SD Get appointment details from Confrimation page "VOAB"
* OAB SD Assert confirmation appointment details to the previous steps for "VOAB"

Assert if deails were correctly transerred to AppHQ for registered guest user VOAB
* OAB AppHQ Go to Appointment HQ page
* OAB AppHQ Log in into Appointment HQ with "correct" credencials
* OAB AppHQ Select brand, country and "VOAB" store
* OAB AppHQ Search Appointment for a "Return User" with "api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Get appointment details from modal "VOAB"
* OAB AppHQ Close modal window
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Dual Langage second service name check
* OAB AppHQ Assert customer details from Confirmation page to Appointment modal "not test"
* OAB AppHQ Assert selected service details from Confirmation page to Appointment modal "VOAB"

Assert if deails were correctly transerred to My Appointments for registered guest user OAB
* OAB SD Switch to "Book Appointment"
* OAB SD Set timezone
* OAB SD Navigate to the account login page
* OAB SD Log in to my account
* OAB SD Navigate to the My appointments
* OAB SD Get appointment details from My appointments page "VOAB" when appointment created in "FE"
* OAB SD Assert service details from Confirmation page to My appointments page for "VOAB"
* OAB SD Click cancel appointment button
* OAB SD Get details of cancelled appointent "VOAB"
* OAB SD Assert service details from Confirmation page to Cancelation popup for "VOAB"
* OAB SD Close cancel pop-up and check if it was removed from the page