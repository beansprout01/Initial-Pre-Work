//I learned how to nest loops within loops

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var e = 0; e < arr.length; e++) {
    for (var m = 0; m < arr[e].length; m++) {
      product = product * arr[e][m];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
