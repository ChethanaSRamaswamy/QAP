# OAB PC HQACLCOUNTERMANAGERPC
* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page
PRECONDTIONS:
Countermanager is assigned to Test Brand
Countermanager is assigned to max one region (current)
Countermanager is assigned to test OAB&VOAB store only.
KNOWN ISSUES:
https://jira.esteeonline.com/browse/OABHQ-1687 - Can be assigned to ALL

## Setup for Countermanager scenario
* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "noapi"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Search for "countermanager" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Set stores according to precondtions "countermanager"
* OAB AppHQ Click "save" "User" button from modal
* OAB AppHQ Search for "reportmanager" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Set stores according to precondtions "reportmanager"
* OAB AppHQ Click "save" "User" button from modal
* OAB AppHQ Log out from Appointment HQ

## Countermanager flow check and verify if cannot add new store, service or category
* OAB AppHQ Log in into Appointment HQ as "countermanager" with "api"
* OAB AppHQ Open profile from My Profile icon
* OAB AppHQ Check users assigned counters
* OAB AppHQ Close modal window
* OAB AppHQ Check if user "can not" change brand and region
* OAB AppHQ Click "Dashboard" from footer "visible"
* OAB AppHQ Check if user "can" change store
* OAB AppHQ Assert assigned stores
* OAB AppHQ Click "Schedule" from footer "visible"
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Click "Search" from footer "visible"
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Stores "visible"
* OAB AppHQ Click add new "Store" "invisible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Services "visible"
* OAB AppHQ Click add new "Services" "invisible"
* OAB AppHQ Open kebab menu "invisible" "any"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Service Categories "visible"
* OAB AppHQ Click add new "Service Categories" "invisible"
* OAB AppHQ Open kebab menu "invisible" "any"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to SMS Communications "visible"
* OAB AppHQ Click back to settings icon
 OAB AppHQ Go to Unclosed Appointments "invisible"
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to Retailers "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Import Stores "invisible"
* OAB AppHQ Go to Features "invisible"
* OAB AppHQ Go to Global "invisible"
* OAB AppHQ Go to Datafeeds "visible"
* OAB AppHQ Go to About "visible"
* OAB AppHQ Log out from Appointment HQ

## Check if countermanager can manage appointments creation. Verify if cannot mark as test appointment and can trigger test emails.
* OAB AppHQ Log in into Appointment HQ as "countermanager" with "noapi"
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Select service from appointment modal "create"
* OAB AppHQ Check if test "appointment" button is "invisible"
* OAB AppHQ Select date and time "future" from appointment modal "create"
* OAB AppHQ Enter customer details and appointment language from appointment modal "create" "not test"
* OAB AppHQ Click "create" "appointment" button from modal
* OAB AppHQ Search Appointment for a "created by AppHQ" with "no api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Check if test "email" button is "visible"
* OAB AppHQ Change appointment status to "Cancelled By Customer"
* OAB AppHQ Confirm "confirm" "appointment" from confirmation modal
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Search Appointment for a "created by AppHQ" with "api"
* OAB AppHQ Get appointment details from search result for "cancelled" appointment

## Check if countermanager can create/update/archive/reactivate/delete schedule, and update/archive/reactivate/delete store.
* OAB AppHQ Log in into Appointment HQ as "countermanager" with "noapi"
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Stores "visible"
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Delete "Store" from "kebab" "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Archive "Store" from "kebab" "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Switch to Archive tab 
* OAB AppHQ Switch to Active tab
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Click add new "Schedule" "visible"
* OAB AppHQ Enter schedule details "OAB" "online"
* OAB AppHQ Click "create" "Schedule" button from modal
* OAB AppHQ Add schedule opening hours for "Monday,Tuesday" with "valid" timeslots as "0" entry
* OAB AppHQ Click "save" "timeslots" button from modal
* OAB AppHQ Search for "added" "Schedule"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Archive "Schedule" from "kebab" "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Switch to Archive tab 
* OAB AppHQ Switch to Active tab
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Delete "Schedule" from "modal" "visible"
* OAB AppHQ Confirm "delete" "Schedule" from confirmation modal
* OAB AppHQ Search for "deleted" "Schedule"

## Check if countermanager can manage only artist but can reset password of other users.
* OAB AppHQ Log in into Appointment HQ as "countermanager" with "noapi"
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Click add new "User" "visible"
* OAB AppHQ Check which type of user "countermanager" can create
* OAB AppHQ Enter user details "artist"
* OAB AppHQ Click "create" "User" button from modal
* OAB AppHQ Search for "added" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Reset password in AppHQ with "valid" from "kebab" "click"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "User" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "User" from confirmation modal
* OAB AppHQ Search for "deleted" "User"
* OAB AppHQ Search for "reportmanager" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "invisible"
* OAB AppHQ Delete "User" from "kebab" "invisible"
* OAB AppHQ Reset password in AppHQ with "valid" from "kebab" "visible"