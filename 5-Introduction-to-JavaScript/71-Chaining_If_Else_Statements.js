//I learned about chaining if else statements

function testSize(num) {
  // Only change code below this line
  if (num >= 20) {
    return "Huge";
  } else if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium";
  } else {
    return "Large"
  }

  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);
