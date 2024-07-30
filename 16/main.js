// Creating a Guest list Array
var guestList = ["Sana", "faryal", "Michelle", "Hira", "Shabana"];
// making variables for those guest who cant come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "She cannot come.");
// Add or remove values from  list array
guestList.splice(0, 1, "Nazia");
// Message Print for bigger Table
console.log("Good News! We have found a Bigger Table for dinner");
//Adding a new guest at starting index of array
guestList.unshift("Maira");
// Adding a new guest at ending index of array
guestList.push("Ramsha");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Fatima");
// print a message of updated List
console.log("Updated list of our Guests");
// sending a invitation message to aur guest one by one with their names.
guestList.forEach(function (oneGuest) { return console.log("Salam ".concat(oneGuest, ", I am Inviting you on dinner at my place ")); });
