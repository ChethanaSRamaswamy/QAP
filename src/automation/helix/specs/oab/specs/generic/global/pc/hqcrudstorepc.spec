# OAB PC HQCRUDSTOREPC
KNOWN ISSUES:
https://jira.esteeonline.com/browse/OABHQ-2413
|id|name|store|type|
|--|-----------|---|---|
|1 |superadministrator|Test OAB|OAB|

* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page
* OAB AppHQ Log in into Appointment HQ as <name> with "no api"
* OAB AppHQ Select brand, country and <store> store
* OAB AppHQ Click "Settings" from footer "visible"

## Create, udpate, archive, delete store
* OAB AppHQ Go to Stores "visible"
* OAB AppHQ Click add new "Store" "visible"
* OAB AppHQ Enter store details <type>
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
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Archive "Store" from "kebab" "visible"
* OAB AppHQ Confirm "archive" "Store" from confirmation modal
* OAB AppHQ Switch to Archive tab 
* OAB AppHQ Search for "Archive" "Store" 
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Activate "Store" "visible"
* OAB AppHQ Confirm "reactivate" "Store" from confirmation modal
* OAB AppHQ Switch to Active tab
* OAB AppHQ Search for "Reactivated" "Store"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "Store" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "Store" from confirmation modal
* OAB AppHQ Search for "deleted" "Store"
* OAB AppHQ Log out from Appointment HQ

## Create, udpate, archive delete schedule 
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Click add new "Schedule" "visible"
* OAB AppHQ Enter schedule details <type> "online"
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
* OAB AppHQ Search for "added" "Schedule"
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
* OAB AppHQ Get schedule timeslots
* OAB AppHQ Search for "added" "Schedule"
* OAB AppHQ Get schedule details
* OAB AppHQ Assert if schedule was "edited"
* OAB AppHQ Delete "Schedule" from "modal" "visible"
* OAB AppHQ Confirm "delete" "Schedule" from confirmation modal
* OAB AppHQ Search for "deleted" "Schedule"
* OAB AppHQ Log out from Appointment HQ