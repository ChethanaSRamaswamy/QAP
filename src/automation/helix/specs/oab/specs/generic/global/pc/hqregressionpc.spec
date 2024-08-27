# OAB PC HQREGRESSIONPC
* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page

## Create, udpate, delete appointment 
* OAB AppHQ Log in into Appointment HQ with "correct" credencials
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Select service from appointment modal "create"
* OAB AppHQ Select date and time "future" from appointment modal "create"
* OAB AppHQ Enter customer details and appointment language from appointment modal "create" "test"
* OAB AppHQ Click "create" "appointment" button from modal
* OAB AppHQ Search Appointment for a "created by AppHQ" with "no api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Get appointment details from modal "pending"
* OAB AppHQ Assert if appointment was "added" "test"
* OAB AppHQ Select service from appointment modal "edit"
* OAB AppHQ Select date and time "future" from appointment modal "edit"
* OAB AppHQ Enter customer details and appointment language from appointment modal "edit" "test"
* OAB AppHQ Click "save" "appointment" button from modal
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Search Appointment for a "created by AppHQ" with "no api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Get appointment details from modal "pending"
* OAB AppHQ Assert if appointment was "edited" "test"
* OAB AppHQ Change appointment status to "Cancelled By Customer"
* OAB AppHQ Confirm "confirm" "appointment" from confirmation modal
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Search Appointment for a "created by AppHQ" with "api"
* OAB AppHQ Get appointment details from search result for "cancelled" appointment
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Log out from Appointment HQ

## Create, update, archive, delete store and schedule
* OAB AppHQ Log in into Appointment HQ with "correct" credencials
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Stores "visible"
* OAB AppHQ Click add new "Store" "visible"
* OAB AppHQ Enter store details "OAB"
* OAB AppHQ Click "create" "Store" button from modal
* OAB AppHQ Search for "added" "Store"
* OAB AppHQ Get store details
* OAB AppHQ Assert if store was "added"
* OAB AppHQ Edit store details
* OAB AppHQ Click "save" "Store" button from modal
* OAB AppHQ Search for "edited" "Store"
* OAB AppHQ Get store details
* OAB AppHQ Assert if store was "edited"
* OAB AppHQ Close modal window
* OAB AppHQ Select brand, country and "Test created" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Click add new "Schedule" "visible"
* OAB AppHQ Enter schedule details "OAB" "online"
* OAB AppHQ Click "create" "Schedule" button from modal
* OAB AppHQ Add schedule opening hours for "Monday,Tuesday" with "valid" timeslots as "0" entry
* OAB AppHQ Add schedule opening hours for "Wednesday" with "valid" timeslots as "1" entry
* OAB AppHQ Click "save" "timeslots" button from modal
* OAB AppHQ Search for "added" "Schedule"
* OAB AppHQ Get schedule timeslots
* OAB AppHQ Search for "added" "Schedule"
* OAB AppHQ Get schedule details
* OAB AppHQ Assert if schedule was "added"
* OAB AppHQ Edit Schedule details
* OAB AppHQ Click "save" "Schedule" button from modal
* OAB AppHQ Remove schedule timeslots
* OAB AppHQ Add schedule opening hours for "Monday,Tuesday" with "valid" timeslots as "0" entry
* OAB AppHQ Click "save" "timeslots" button from modal
* OAB AppHQ Search for "edited" "Schedule"
* OAB AppHQ Get schedule timeslots
* OAB AppHQ Search for "edited" "Schedule"
* OAB AppHQ Get schedule details
* OAB AppHQ Assert if schedule was "edited"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Archive "Schedule" from "kebab" "visible"
* OAB AppHQ Confirm "archive" "schedule" from confirmation modal
* OAB AppHQ Switch to Archive tab 
* OAB AppHQ Search for "Archive" "Schedule" 
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Activate "Schedule" "visible"
* OAB AppHQ Confirm "reactivate" "Schedule" from confirmation modal
* OAB AppHQ Switch to Active tab
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Delete "Schedule" from "modal" "visible"
* OAB AppHQ Confirm "delete" "Schedule" from confirmation modal
* OAB AppHQ Search for "deleted" "Schedule"
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Stores "visible"
* OAB AppHQ Search for "edited" "Store"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Archive "Store" from "kebab" "visible"
* OAB AppHQ Confirm "archive" "store" from confirmation modal
* OAB AppHQ Switch to Archive tab 
* OAB AppHQ Search for "Archive" "Store" 
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Activate "Store" "visible"
* OAB AppHQ Confirm "reactivate" "Store" from confirmation modal
* OAB AppHQ Switch to Active tab
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "Store" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "Store" from confirmation modal
* OAB AppHQ Search for "deleted" "Store"
* OAB AppHQ Log out from Appointment HQ

## Create, udpate, delete service category and create, udpate, delete archive service
* OAB AppHQ Log in into Appointment HQ with "correct" credencials
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Service Categories "visible"
* OAB AppHQ Click add new "Service Category" "visible"
* OAB AppHQ Enter service category details "Test"
* OAB AppHQ Click "create" "Service Category" button from modal
* OAB AppHQ Search for "added" "Service Category"
* OAB AppHQ Get service category details
* OAB AppHQ Assert if service category was "added"
* OAB AppHQ Edit Service Category details
* OAB AppHQ Click "save" "Service Category" button from modal
* OAB AppHQ Search for "edited" "Service Category"
* OAB AppHQ Get service category details
* OAB AppHQ Assert if service category was "edited"
* OAB AppHQ Close modal window
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Services "visible"
* OAB AppHQ Click add new "Service" "visible"
* OAB AppHQ Enter service details "Test"
* OAB AppHQ Click "create" "Service" button from modal
* OAB AppHQ Search for "added" "Service"
* OAB AppHQ Get service details
* OAB AppHQ Assert if service was "added"
* OAB AppHQ Edit service details
* OAB AppHQ Click "save" "Service" button from modal
* OAB AppHQ Search for "edited" "Service"
* OAB AppHQ Get service details
* OAB AppHQ Assert if service was "edited"
* OAB AppHQ Archive "Service" from "modal" "visible"
* OAB AppHQ Switch to Archive tab 
* OAB AppHQ Search for "Archive" "Service" 
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Activate "Service" "visible"
* OAB AppHQ Switch to Active tab
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "Service" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "Service" from confirmation modal
* OAB AppHQ Search for "deleted" "Service"
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Service Categories "visible" 
* OAB AppHQ Search for "edited" "Service Category"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "Service Category" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "Service Category" from confirmation modal
* OAB AppHQ Search for "deleted" "Service Category"
* OAB AppHQ Log out from Appointment HQ

## Datafeeds check
* OAB AppHQ Log in into Appointment HQ with "correct" credencials
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Datafeeds "visible"
* OAB AppHQ Go to module "Appointments Datafeeds"
* OAB AppHQ Click add new "Datafeed" "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Datafeeds "visible"
* OAB AppHQ Go to module "Online Stores Datafeeds"
* OAB AppHQ Click add new "Datafeed" "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Datafeeds "visible"
* OAB AppHQ Go to module "Services Datafeeds"
* OAB AppHQ Click add new "Datafeed" "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Click back to settings icon
* OAB AppHQ Log out from Appointment HQ

## Reports check
* OAB AppHQ Log in into Appointment HQ with "correct" credencials
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "General Reporting"
* OAB AppHQ Check "Generate report" in Reporing tab "click"
* OAB AppHQ Check "Export report CSV" in Reporing tab "visible"
* OAB AppHQ Check "Export report Excel" in Reporing tab "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "SMS Statistics"
* OAB AppHQ Check "Generate report" in Reporing tab "click"
* OAB AppHQ Check "Export report CSV" in Reporing tab "visible"
* OAB AppHQ Check "Export report Excel" in Reporing tab "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "League Table"
* OAB AppHQ Check "Generate report" in Reporing tab "click"
* OAB AppHQ Check "Export report CSV" in Reporing tab "visible"
* OAB AppHQ Check "Export report Excel" in Reporing tab "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "League Table Status"
* OAB AppHQ Check "Generate report" in Reporing tab "click"
* OAB AppHQ Check "Export report CSV" in Reporing tab "visible"
* OAB AppHQ Check "Export report Excel" in Reporing tab "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "Users & Roles"
* OAB AppHQ Check "View report" in Reporing tab "click"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "Artist Comments"
* OAB AppHQ Check "Generate report" in Reporing tab "click"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "Stores"
* OAB AppHQ Check "View report" in Reporing tab "click"
* OAB AppHQ Check "Export report CSV" in Reporing tab "visible"
* OAB AppHQ Check "Export report Excel" in Reporing tab "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "Booking Utilization"
* OAB AppHQ Check "Generate report" in Reporing tab "click"
* OAB AppHQ Check "Export report CSV" in Reporing tab "visible"
* OAB AppHQ Check "Export report Excel" in Reporing tab "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "Services"
* OAB AppHQ Check "Generate report" in Reporing tab "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to module "Custom Reports"
* OAB AppHQ Check "View report" in Reporing tab "visible"