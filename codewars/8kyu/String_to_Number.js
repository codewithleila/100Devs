/* We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"
*/

var stringToNumber = function(str){
     return +str 
}

// Best Practice 1:
var stringToNumber = function(str){
return parseInt(str, 10);
}


// Best Practice 2:
var stringToNumber = function(str){
  // put your code here
  return Number(str);
}
