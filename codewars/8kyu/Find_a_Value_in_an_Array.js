/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

//My attempt
let check = (a, x) => a.includes(x);

//Another Way:

const check = (a,x) => a.includes(x);

//Normal function way: 

function check(a,x){
  return a.includes(x);
};
