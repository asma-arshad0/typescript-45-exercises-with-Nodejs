//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList = ["Sana","faryal","Michelle","Hira","Shabana"];
let dontCome = guestList[0];
console.log(dontCome, "She can not come");
guestList.splice(0, 1, "Kaneez Fatima");
guestList.forEach(oneGuest=> console.log(`Asalam u Alikum ${oneGuest}, I am inviting you for the dinner at my place on Saturday.`));
