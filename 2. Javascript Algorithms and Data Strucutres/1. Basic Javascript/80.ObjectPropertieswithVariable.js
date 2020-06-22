/* 
Another use of bracket notation on objects is to access a property 
which is stored as the value of a variable. 
This can be very useful for iterating through an object's properties 
or when accessing a lookup table.

Here is an example of using a variable to access a property:

var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"


Another way you can use this concept is when the property's name is collected 
dynamically during the program execution, as follows:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}

var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"

Note: that we do not use quotes around the variable name when using it 
to access the property because we are using the value of the variable, not the name.

Task:
Use the playerNumber variable to look up player 16 in testObj using bracket notation. 
Then assign that name to the player variable.

*/
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line

var playerNumber = 16; // Change this line
var player = testObj[playerNumber]; // Change this line
