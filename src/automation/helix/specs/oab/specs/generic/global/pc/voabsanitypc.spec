# VOAB PC VOABSANITYPC

## Book Appointment, verify GDPR and assert details
* OAB SD Initialize Helix
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
* OAB SD Enter guest email "first time"
* OAB SD Enter phone number
* OAB SD Enter CPF number "Guest"
* OAB SD Verify GDPR for EMEA markets "functional"
* OAB SD Check Terms & conditions and Privacy Policy checkbox
* OAB SD Click book the appointment button
* OAB SD Check if confirmation page appeared
* OAB SD Check if ZOOM/Get Directions link exists "VOAB"
* OAB SD Check if ZOOM link is opened in next tab
* OAB SD Get appointment details from Confrimation page "VOAB"
* OAB SD Assert confirmation appointment details to the previous steps for "VOAB"

## Delete appointment from Appointents HQ -scenario 1
* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page
* OAB AppHQ Log in into Appointment HQ with "correct" credencials
* OAB AppHQ Select brand, country and "VOAB" store
* OAB AppHQ Search Appointment for a "Guest User" with "api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Get appointment details from modal "VOAB"
* OAB AppHQ Change appointment status to "Cancelled By Customer"
* OAB AppHQ Confirm "confirm" "appointment" from confirmation modal
* OAB AppHQ Clear and close searched appointment