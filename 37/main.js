//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//Calling a function with by-defualt values
make_shirt();
//calling a function now with medium size and default message
make_shirt("Medium");
//calling a function now with small size and diffrent message
make_shirt("Small", "I love JavaScript");
//calling a function now with default size and different message
make_shirt(undefined, "I Love python");
