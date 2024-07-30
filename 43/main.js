//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.`
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
var magicians_name = ["Herry Poter", "Asma", "Hira"];
function make_great(Magicians) {
    return Magicians.map(function (name) { return "The Great ".concat(name); });
}
var copyMagicians_name = magicians_name.slice();
//modified the copied arry to include "The Greart" with their names
var copy_great_magicians = make_great(copyMagicians_name);
//show both array Original and Copied
//original 
show_magicians(magicians_name);
//COPIED
show_magicians(copy_great_magicians);
