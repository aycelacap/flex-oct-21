// open a folder and create an index.html file
// in between the head tags, create a script element and source the js file

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

// let addFive = makeAdder(5);
// let addTen = makeAdder(10);

// console.log(addFive(2)); //5 + 2 = 7
// console.log(addTen(2)); // 12

console.log(makeAdder(5)(2));
console.log(makeAdder(10)(2));


