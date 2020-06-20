/* 
Unlike strings, the entries of arrays are mutable and can be changed freely.

Example

var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
Note
There shouldn't be any spaces between the array name and the square brackets, 
like array [0]. Although JavaScript is able to process this correctly, 
this may confuse other programmers reading your code.

Task: Modify the data stored at index 0 of myArray to a value of 45.

*/

// Setup
var myArray = [18, 64, 99];
myArray[0] = 45;
// now output will be myArray[45,64,99]
