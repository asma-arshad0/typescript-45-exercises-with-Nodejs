//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.`

function show_magicians(Magicians: string[]){
    Magicians.forEach(name => console.log(name));
}

let magicians_name:string[] = ["Herry Poter", "Asma", "Hira"]

function make_great(Magicians:string[]){
   return Magicians.map(name => `The Great ${name}`)
}

//MAKE A copy of array by slice
let copyMagicians_name = magicians_name.slice()

//modified the copied arry to include "The Greart" with their names
let copy_great_magicians = make_great(copyMagicians_name);

//show both array Original and Copied

//original 

show_magicians(magicians_name);

//COPIED
show_magicians(copy_great_magicians);









