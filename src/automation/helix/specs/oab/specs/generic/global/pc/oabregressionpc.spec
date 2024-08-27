# OAB PC OABREGRESSIONPC

## Book OAB appointment as a logged in user
* OAB SD Initialize Helix
* OAB SD Configuring the prerequisites like set cookies, revision tag
* OAB SD If dual language settings
* OAB SD Close Durpal Bar
* OAB SD Navigate to the account login page
* OAB SD Log in to my account
* OAB SD Open website for Appointment Booking "no api"
* OAB SD Select the appointment type "OAB"
* OAB SD Select any available service
* OAB SD Select date & time of the appointment
* OAB SD Assert appointment details on review page to previous steps "OAB"
* OAB SD Enter user first and last name "test"
* OAB SD Enter registered user email
* OAB SD Enter phone number
* OAB SD Enter CPF number "Registred"
* OAB SD Check Terms & conditions and Privacy Policy checkbox
* OAB SD Click book the appointment button with intercept
* OAB SD Check if confirmation page appeared
* OAB SD Get appointment details from Confrimation page "OAB"
* OAB SD Assert confirmation appointment details to the previous steps for "OAB"

Assert if deails were correctly transerred to My Appointments for logged in user OAB
* OAB SD Navigate to the My appointments
* OAB SD Get appointment details from My appointments page "OAB" when appointment created in "FE"
* OAB SD Assert service details from Confirmation page to My appointments page for "OAB"
* OAB SD Click cancel appointment button
* OAB SD Get details of cancelled appointent "OAB"
* OAB SD Assert service details from Confirmation page to Cancelation popup for "OAB"
* OAB SD Close cancel pop-up and check if it was removed from the page