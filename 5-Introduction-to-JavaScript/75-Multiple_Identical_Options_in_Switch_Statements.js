//I learned how to make multiple options in a switch statement have the same value

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
    return "Low";
    break;
    case 4:
    case 5:
    case 6:
    return "Mid";
    case 7:
    case 8:
    case 9:
    return "High";
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
