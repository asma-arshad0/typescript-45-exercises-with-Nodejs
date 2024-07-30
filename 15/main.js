var guestList = ["Sana", "faryal", "Michelle", "Hira", "Shabana"];
var dontCome = guestList[0];
console.log(dontCome, "She can not come");
guestList.splice(0, 1, "Kaneez Fatima");
guestList.forEach(function (oneGuest) { return console.log("Asalam u Alikum ".concat(oneGuest, ", I am inviting you for the dinner at my place on Saturday.")); });
