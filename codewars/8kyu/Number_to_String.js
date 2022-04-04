/* We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999" 
*/

function numberToString(num) {
  // Return a string of the number here!
 return num.toString();
}

*/Best Practice */

function numberToString(num) {
  return ''+num;
}

// or

function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}
