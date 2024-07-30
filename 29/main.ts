//Task no. 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//define array
let favorite_fruits = ["Mango", "Lychee" , "Stawberry"]
//using 5 independent if Statement
if (favorite_fruits.includes("Mango")){
    console.log("I really like Mango");
}
if (favorite_fruits.includes("Lychee")){
    console.log("I really like lychee");
}
if (favorite_fruits.includes("Apple")){
    console.log("I really like apple");
}
if (favorite_fruits.includes("Banana")){
    console.log("i really like Banana");
}
if (favorite_fruits.includes("Stawberry")){
    console.log("I really like stawberry"); 
}
