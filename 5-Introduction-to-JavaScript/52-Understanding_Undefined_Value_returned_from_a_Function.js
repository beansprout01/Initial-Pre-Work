//I learned that not having a return value makes the returned value undefined

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
};

// Only change code above this line
var returnedValue = addFive();
