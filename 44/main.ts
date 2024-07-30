//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwiches_item(...items : string[]){
    console.log("\nMaking a sandwich with the following items:")
    items.forEach(singleItem  => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");

}

//call the funstion 3 times with different number of argument
sandwiches_item("Chicken", "Cheese", "Garlic Sauce");

sandwiches_item("Mayo", "lettuce", "Cucumber", "Onion");

sandwiches_item("Cheese", "Butter", "Tomato", "Avacado", "Egg");
