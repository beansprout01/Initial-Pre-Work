//I learned how to use higher order functions in arrow functions. I wasn't sure how to use them since there wasn't a lesson on them in the course load so I looked up how to use them.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((number) => number > 0 && number % parseInt(number) === 0).map ((number) => number * number);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
