# OAB Mobile test

## Verify that a Guest User is able to book a Regular Appointment with more than one service and he is also able to change the appointment timeslot before booking confirmation

* OAB Initialize Helix
* OAB Mobile Device Emulation
* OAB Configuring the prerequisites like set cookies, revision tag
* OAB Click Welcome Location
* OAB Click Welcome Language
* OAB Click Welcome Submit Button
* OAB Open website for Appointment Booking
* OAB Click Accept Cookie
* OAB Popup Close
* OAB Select Appointment Location
* OAB Click Location Mobile Submit Button
* OAB Select Service
* OAB Select Service1
* OAB Select Ratings and Review
* OAB Click Book Now
* OAB Select a Timeslot
* OAB Click Next Button after Date Time Selection
* OAB click edit date time button
* OAB Check tout to call is displayed "OAB"
* OAB Modify Timeslot
* OAB Click Next Button after Date Time Selection
* OAB Enter firstname
* OAB Enter lastname
* OAB Enter Email id
* OAB Enter mobile number
* OAB Check Accept privecy policy checkbox
* OAB Get Appointment Details from Appointment Review Page "OAB"
* OAB click BOOK NOW button
* OAB Get Appointment Details from Appointment Confirmation Page "OAB"
* OAB Assert Service Name of Appointment Confirmation and Review Page "OAB"
* OAB Assert Selected Location and Location of Appointment Confirmation Page
* OAB Assert Selected Date and Date of Appointment Confirmation Page

## Verify that a Return User is able to book a Regular Appointment with one service from My Account and he is also able to Modify and Cancel the same appointment from My Account

* OAB Initialize Helix
* OAB Mobile Device Emulation
* OAB Configuring the prerequisites like set cookies, revision tag
* OAB Click Welcome Location
* OAB Click Welcome Language
* OAB Click Welcome Submit Button
* OAB Open Return user login page
* OAB Click Accept Cookie
* OAB Click on Sign in button
* OAB Popup Close
* OAB Account Return User EmailId "OAB"
* OAB Account Return User PWD
* OAB Account Return User Login Button
* OAB Navigate to the My appointments
* OAB Click My Appointments Page Book Now Button
* OAB Select Appointment Location
* OAB Click Location Mobile Submit Button
* OAB Select Service
* OAB Select Service1
* OAB Select Ratings and Review
* OAB Click Book Now
* OAB Select a Timeslot
* OAB Click Next Button after Date Time Selection
* OAB Enter firstname
* OAB Enter lastname
* OAB Enter Return User Email id "OAB"
* OAB Enter mobile number
* OAB Check Accept privecy policy checkbox
* OAB Get Appointment Details from Appointment Review Page "OAB"
* OAB click BOOK NOW button
* OAB Get Appointment Details from Appointment Confirmation Page "OAB"
* OAB Assert Service Name of Appointment Confirmation and Review Page "OAB"
* OAB Assert Selected Location and Location of Appointment Confirmation Page
* OAB Assert Selected Date and Date of Appointment Confirmation Page
* OAB Navigate to the My appointments
* OAB Get Appointment details in My Appointments page "OAB"
* OAB Modify Appointment in My Appointments page "OAB"
* OAB Select a Timeslot
* OAB Click Next Button after Date Time Selection
* OAB Get Appointment Details from Appointment Review Page "OAB"
* OAB click BOOK NOW button
* OAB Get Appointment Details from Appointment Confirmation Page "OAB"
* OAB Navigate to the My appointments
* OAB Get Appointment details in My Appointments page "OAB"
* OAB Assert Service Name of Appointment Confirmation and My Appointments Page "OAB"
* OAB Assert Location of Appointment Confirmation Page and My Appointments Page
* OAB Assert Date of Appointment Confirmation Page and My Appointments Page
* OAB Cancel Appointment in My Appointments page "OAB"
* OAB Get Appointment details in My Appointments page "OAB"
* OAB Assert Date of Cancelled Appointment and the other Appointments in My Appointments Page