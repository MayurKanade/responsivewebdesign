/* 
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), 
except it removes the first element instead of the last.

Example:

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

Task:
Use the .shift() function to remove the first item from myArray, 
assigning the "shifted off" value to removedFromMyArray.
*/

// Setup
var myArray = [
  ["John", 23],
  ["dog", 3],
];

// Only change code below this line
var removedFromMyArray;
removedFromMyArray = myArray.shift();
