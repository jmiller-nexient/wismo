
# How to Use/Access Firebase

## Firebase Account
The Firebase account is wismofe@gmail.com. Password is nexient@dte2.
AccountName: **wismofe@gmail.com**
Password: **nexient@dte2**

Once inside the Google Account, you will have to navigate to the [Firebase console](https://console.firebase.google.com). From there you should see something that says "Your firebase projects" with two options, "Create new project" and "wismo". The database is inside the wismo project. Once inside you will need to go into the Develop > Database menu which should show the database and all its contents.

## Accessing Firebase as an API
To use Firebase as a REST API, simply send your request to `https://wismo-d7236.firebaseio.com/ENTRY.json`, replacing ENTRY with whatever specific location in the database you want. Currently it only has one location, `order`.

## Altering Data in the Database
The Firebase database is a document store database and is fairly easy to alter. If you want add something to the database hover over an item and then click the plus. This will create a new key/value pair inside the item you clicked. If you want to delete an item, hover over it and click the x. This will delete the item and everything inside it. You can also import json files into the database. I recommend creating a new key for this json. To do this, go through the normal process of creating an item, and give it a dummy value for its value(I recommend 0). Then click on your new key. This will zoom in the display to just that item. From there click on the three vertical dots and hit import JSON. That should open up a file browser and from there you can find your .json file and import it. This will overwrite any preexisting data for this key.