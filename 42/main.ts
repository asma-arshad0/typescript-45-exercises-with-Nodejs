//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
//to modified the array though .map
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}
//define an array containing magicians name
let magician_names = ["Harry Poter", "Asma", "Hira"]

//make variable to save the updated array through functaion
let great_magician = make_great(magician_names);

//call the function of modified  of print each magician name
show_magicians(great_magician);