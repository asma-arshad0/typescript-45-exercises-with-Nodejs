"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//creating a Array with 6 values
let userNames = ["Asma", "Admin", "Faryal", "Hira", "Kaneez", "Michelle"];
//Removing all values from our Array now Array is empty
// userNames = []
//If statement for checking length of our Array is empty?
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    //if array is not empty use forEach loop on array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status. `);
        }
        else {
            console.log(`Hello ${oneUser}, Thank you for logging in again.`);
        }
    });
}
