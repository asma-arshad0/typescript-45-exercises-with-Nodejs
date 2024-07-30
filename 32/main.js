"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//array of current users
let current_users = ["asma", "Farheen", "Laiba", "Muntaha", "Ramsha"];
//array of new users
let new_users = ["Hamza", "Sohaib", "Asma", "Muntaha", "Faryal"];
//loop through new-users to check for usernames availibity
new_users.forEach(newOneUser => {
    //making a condition for new username already exist
    let ourCondition = current_users.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase());
    if (ourCondition) {
        console.log(`Sorry ${newOneUser} is alresdy taken`);
    }
    else {
        console.log(`This user name ${newOneUser} is available.`);
    }
});
