/* 
We can pass values into a function with arguments. 
You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8

plusThree takes an argument for num and returns a value equal to num + 3.

Task:
Create a function timesFive that accepts one argument, 
multiplies it by 5, and returns the new value. 
See the last line in the editor for an example of how you can test your timesFive function.
*/

function timesFive(num) {
  return num * 5;
}

var answer = timesFive(5); // 25
