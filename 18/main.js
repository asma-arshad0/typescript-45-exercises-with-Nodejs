var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making array of countries and print original order
var countriesToVisit = ["Suadia Arabia", "Japan", "Turkey", "China"];
console.log("Origina Order:", countriesToVisit);
// making array of alphabatical Order without changing orinal one
console.log("Alphabatical Order:", __spreadArray([], countriesToVisit, true).sort());
// show 
console.log("Still in original Order:", countriesToVisit);
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in original Order:", countriesToVisit);
console.log("Original Array Reversed:", countriesToVisit.reverse());
// print the array to show 
console.log("Back to Origianl Order:", countriesToVisit.reverse());
console.log("Sorted in Alphabatical Order:", countriesToVisit.sort());
console.log("Original Array Reversed again:", countriesToVisit.reverse());
