// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
//Creating an Array
var favPizzas = ["Afghani Chicken Pizza", "Crown Pizza", "Chicken Fajita Pizza"];
//Using a for loop 
for (var _i = 0, favPizzas_1 = favPizzas; _i < favPizzas_1.length; _i++) {
    var pizza = favPizzas_1[_i];
    // console.log(pizza);
    console.log("I like the taste of ".concat(pizza, " "));
}
//print a message
console.log("I really love Pizza ");
