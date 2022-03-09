function addThreeNums(num1, num2, num3) {
  return num1 + num2 + num3;
} //this is cool but not dynamic enough

function curriedAddThreeNums() {
  return function(num1) {
    num1;
    return function(num2) {
      num1; num2;
      return function(num3) {
        num1; num2;
        return num1 + num2 + num3;
      };
    };
  };
};

const a = curriedAddThreeNums();
const b = a(1); // is set to the invokation of the outter function
const c = b(2); // invoking middle
const result = c(3); //invoking the innermost function => 6