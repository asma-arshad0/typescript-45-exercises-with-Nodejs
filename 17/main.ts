// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.




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
// inform that only two person cant come.
console.log("Unfortunately! the new dinner table wont arrage on time only two person can join me for dinner.");
// using while loop to remove 
while(guestList.length >2){
    let removeGuest= guestList.pop ();
    console.log(`Sorry, ${removeGuest} I can't invite you to dinner`);

}
// Sending a invitations to the last two guest from the list
console.log("Invitation to the Last two Guests");
guestList.forEach(lastTwo=> console.log(`luckly ${lastTwo}, you are still invited to dinner` ));
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List;", guestList);
