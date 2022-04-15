/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/



function getCount(str) {
  var vowelsCount = 0;
  var inputLetters = str.split("");
  
  const vowels = ["a","e","i","o","u"];
  
  vowels.forEach(function(vowel) {
    inputLetters.forEach(function(i) {
      if (i === vowel) {
        vowelsCount++;
      }
    });
  });
  
  return vowelsCount;
}


// Best Solulion 1
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}


// Best Solution 2
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

// Best Solution 3
function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length:0;
}
