//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//to modified the array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array containing magicians name
var magician_names = ["Harry Poter", "Asma", "Hira"];
//call the function to print each magician name
var great_magician = make_great(magician_names);
console.log(great_magician);
show_magicians(great_magician);
