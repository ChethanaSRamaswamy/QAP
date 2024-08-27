# OAB PC HQACLBRANDADMINPC
* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page
PRECONDTIONS:
Brandadmin is assigned to all brand but not by ALL button
Brandadmin is assigned to all regions but not by ALL button
Brandadmin is assigned to all stores
KNOWN ISSUES:
https://jira.esteeonline.com/browse/OABHQ-2681 

## Brandadmin flow check.
* OAB AppHQ Log in into Appointment HQ as "brandadmin" with "api"
* OAB AppHQ Open profile from My Profile icon
* OAB AppHQ Check users assigned counters
* OAB AppHQ Close modal window
* OAB AppHQ Check if user "can" change brand and region
* OAB AppHQ Assert assigned brands and regions
* OAB AppHQ Check if user "can" change store
* OAB AppHQ Assert assigned stores
* OAB AppHQ Click "Dashboard" from footer "visible"
* OAB AppHQ Click "Schedule" from footer "visible"
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Click "Search" from footer "visible"
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Stores "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Services "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Service Categories "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to SMS Communications "visible"
* OAB AppHQ Click back to settings icon
 OAB AppHQ Go to Unclosed Appointments "visible"
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to Retailers "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Import Stores "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Features "visible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Global "invisible"
* OAB AppHQ Go to Datafeeds "visible"
* OAB AppHQ Go to About "visible"
* OAB AppHQ Log out from Appointment HQ

## Check if brandadmin can manage appointments creation. Verify if can mark as test appointment and can trigger test emails.
* OAB AppHQ Log in into Appointment HQ as "brandadmin" with "noapi"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Select service from appointment modal "create"
* OAB AppHQ Check if test "appointment" button is "visible"
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

## Check if brandadmin can create/update/archive/reactivate/delete schedules stores.
* OAB AppHQ Log in into Appointment HQ as "brandadmin" with "noapi"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Stores "visible"
* OAB AppHQ Click add new "Store" "visible"
* OAB AppHQ Enter store details "OAB"
* OAB AppHQ Click "create" "Store" button from modal
* OAB AppHQ Search for "added" "Store"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Archive "Store" from "kebab" "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Switch to Archive tab 
* OAB AppHQ Switch to Active tab
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "Store" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "Store" from confirmation modal
* OAB AppHQ Search for "deleted" "Store"
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

## Check if brandadmin can create/update/archive/reactivate/delete services and categories.
* OAB AppHQ Log in into Appointment HQ as "brandadmin" with "noapi"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Service Categories "visible"
* OAB AppHQ Click add new "Service Category" "visible"
* OAB AppHQ Enter service category details "Test"
* OAB AppHQ Click "create" "Service Category" button from modal
* OAB AppHQ Search for "added" "Service Category"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to Services "visible"
* OAB AppHQ Click add new "Service" "visible"
* OAB AppHQ Enter service details "Test"
* OAB AppHQ Click "create" "Service" button from modal
* OAB AppHQ Search for "added" "Service"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Close modal window
Please restore when bug: https://jira.esteeonline.com/browse/OABHQ-2681 fixed
OAB AppHQ Open kebab menu "visible" "specific"
OAB AppHQ Archive "Service" from "kebab" "visible"
OAB AppHQ Close modal "footer"
* OAB AppHQ Switch to Archive tab 
* OAB AppHQ Switch to Active tab
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Delete "Service" from "modal" "visible"
* OAB AppHQ Confirm "delete" "Service" from confirmation modal
* OAB AppHQ Search for "deleted" "Service"
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Service Categories "visible"
* OAB AppHQ Search for "added" "Service Category"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "Service Category" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "Service Category" from confirmation modal
* OAB AppHQ Search for "deleted" "Service Category"

## Check if brandadmin can manage all users but superadministrator.
* OAB AppHQ Log in into Appointment HQ as "brandadmin" with "noapi"
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Click add new "User" "visible"
* OAB AppHQ Check which type of user "brandadmin" can create
* OAB AppHQ Enter user details "artist"
* OAB AppHQ Click "create" "User" button from modal
* OAB AppHQ Search for "added" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Reset password in AppHQ with "valid" from "kebab" "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "User" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "User" from confirmation modal
* OAB AppHQ Search for "deleted" "User"
* OAB AppHQ Search for "superadministrator" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "User" from "kebab" "visible"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Reset password in AppHQ with "valid" from "kebab" "visible"