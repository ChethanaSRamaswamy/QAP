# OAB PC HQACLARTISTPC
* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page
PRECONDTIONS:
Artist is assigned to Test Brand
Artist is assigned to max one region (current)
Artist is assigned to test OAB store only.
KNOWN ISSUES:
https://jira.esteeonline.com/browse/OABHQ-1687 - Can be assigned to ALL
https://jira.esteeonline.com/browse/OABHQ-2551 - Can see option to manage schedules

## Setup for Artist scenario
* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "noapi"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Search for "artist" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Set stores according to precondtions "artist"
* OAB AppHQ Click "save" "User" button from modal
* OAB AppHQ Log out from Appointment HQ

## Artist flow check and varify if cannot add/edit/archive store, schedule, service or category.
* OAB AppHQ Log in into Appointment HQ as "artist" with "api"
* OAB AppHQ Open profile from My Profile icon
* OAB AppHQ Check users assigned counters
* OAB AppHQ Close modal window
* OAB AppHQ Check if user "can not" change brand and region
* OAB AppHQ Check if user "can not" change store
* OAB AppHQ Assert assigned stores
* OAB AppHQ Click "Dashboard" from footer "visible"
* OAB AppHQ Click "Schedule" from footer "visible"
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Click "Search" from footer "visible"
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Stores "visible"
* OAB AppHQ Click add new "Store" "invisible"
* OAB AppHQ Open kebab menu "invisible" "any"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Click add new "Schedule" "invisible"
* OAB AppHQ Open kebab menu "invisible" "any"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Services "visible"
* OAB AppHQ Click add new "Service" "invisible"
* OAB AppHQ Open kebab menu "invisible" "any"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Service Categories "visible"
* OAB AppHQ Click add new "Service Category" "invisible"
* OAB AppHQ Open kebab menu "invisible" "any"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Users "invisible"
* OAB AppHQ Go to SMS Communications "invisible"
 OAB AppHQ Go to Unclosed Appointments "invisible"
* OAB AppHQ Go to Reporting "invisible"
* OAB AppHQ Go to Retailers "invisible"
* OAB AppHQ Go to Import Stores "invisible"
* OAB AppHQ Go to Features "invisible"
* OAB AppHQ Go to Global "invisible"
* OAB AppHQ Go to Datafeeds "visible"
* OAB AppHQ Go to About "visible"
* OAB AppHQ Log out from Appointment HQ

## Check if artist can manage appointments. Verify if cannot mark as test appointment and trigger test emails.
* OAB AppHQ Log in into Appointment HQ as "artist" with "noapi"
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Select service from appointment modal "create"
* OAB AppHQ Check if test "appointment" button is "invisible"
* OAB AppHQ Select date and time "future" from appointment modal "create"
* OAB AppHQ Enter customer details and appointment language from appointment modal "create" "not test"
* OAB AppHQ Click "create" "appointment" button from modal
* OAB AppHQ Search Appointment for a "created by AppHQ" with "no api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Check if test "email" button is "invisible"
* OAB AppHQ Change appointment status to "Cancelled By Customer"
* OAB AppHQ Confirm "confirm" "appointment" from confirmation modal
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Search Appointment for a "created by AppHQ" with "api"
* OAB AppHQ Get appointment details from search result for "cancelled" appointment