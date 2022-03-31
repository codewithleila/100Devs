/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

function solution(str){
    // return an array of elements of the string
    var stringArray = str.split("");
   
    // reverse the array elements into a new array of elements
    var reverseArray = stringArray.reverse();
 
    // join the new reversed elements of the array into a string
    var joinArray = reverseArray.join("");
    
    // return reversed string
    return joinArray;
}
 

/* Best Practices Solution 1*/
function solution(str){
  return str.split('').reverse().join('');  
}

/* Best Practices Solution 2*/
const solution = str => str.split('').reverse().join('');


/* Best Practices Solution 3*/
const solution = s => [...s].reverse().join('')
