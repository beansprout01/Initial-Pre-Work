//I put into practice what I learned about manipulating arrays

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var shifted = arr.shift();
  return shifted;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
