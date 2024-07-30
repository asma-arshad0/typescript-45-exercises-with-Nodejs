//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Creating a Guest list Array
let guestList = ["Sana","faryal","Michelle","Hira","Shabana"];
// making variables for those guest who cant come
let dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "She cannot come.");
// Add or remove values from  list array
guestList.splice(0,1, "Nazia");
// Message Print for bigger Table
console.log("Good News! We have found a Bigger Table for dinner");
//Adding a new guest at starting index of array
guestList.unshift("Maira");
// Adding a new guest at ending index of array
guestList.push("Ramsha");
// Get a middle index of our guest list array
let middleIndex:number = Math.floor (guestList.length / 2);
// Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Fatima");
// print a message of updated List
console.log("Updated list of our Guests");
// sending a invitation message to aur guest one by one with their names.
guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, I am Inviting you on dinner at my place `));

