"use strict";
//TASK 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Making Variables
let vegetable = "patato";
let fruit = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let fruitsArr = ["apple", "orange", "banana", "kiwi"];
//test for equaility with string 
console.log("Patato is a vegetable");
console.log(vegetable === "patato");
console.log("\nApple is a fruit");
console.log(fruit === "apple");
console.log("\nApple is a vegetable");
console.log(fruit === vegetable);
console.log("\nPatato is a fruit");
console.log(fruit === vegetable);
//test for inequality with string
console.log("\nPatato is not a fruit");
console.log(vegetable != fruit);
console.log("\nApple is not a vegetable");
console.log(fruit != vegetable);
console.log("\nPatato is not a vegetable");
console.log(vegetable != "patato");
console.log("\nApple is not a fruit");
console.log("apple" != fruit);
//test using the lowar case function
console.log("\nIs APPLE is equals to apple after converting to lower case?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\nIS APPLE is not equals to apple after converting to lower Case?");
console.log(upperCaseApple.toLowerCase() != "apple");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//equility
console.log("\nten is equals to 10");
console.log(ten == 10);
//inequality
console.log("\nTen is not equals to 11");
console.log(ten != 11);
//greater than
console.log("\nTen is greater than zero");
console.log(10 > 0);
//less than 
console.log("\nTen is less then zero");
console.log(ten < 0);
//greather than or equals to
console.log("\nIs Ten equals to or greater than 8");
console.log(ten >= 8);
//less than or equal to
console.log("\nIs ten is less than or equals to 23");
console.log(ten <= 23);
//test using and, or operators
//operators and
console.log("\nPotato is a vegetable and apple is a fruit, is this statement is correct? ");
console.log(vegetable == "patato" && fruit == "apple");
console.log("\nTen is not equals to 20 and twenty is greater than 10");
console.log(ten != 20 && 20 > ten);
console.log("\nTen is not equals to 5 and five is greater than 10");
console.log(ten != 5 && 5 > ten);
//operator OR
console.log("\nten is equals to 10 or ten is equals to 20");
console.log(ten == 10 || ten == 20);
console.log("\nTen not equals to 10 or ten is less then 8 ");
console.log(ten != 10 || ten < 8);
//test wether item is an array
console.log("\nIs apple in the list?");
console.log(fruitsArr.includes("apple"));
console.log("\nIs mango in the list?");
console.log(fruitsArr.includes("mango"));
