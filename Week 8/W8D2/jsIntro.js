// myEach
// myMap

// what is the purpose of forEach?
  // iterator, and calls a function on each element


Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
    // why don't we return the cb(this[i])
    // exit out of the loop prematurely 
    // purely an iterator
  }
};

const NUMS = [1, 2, 3, 4, 5]

NUMS.myEach((num) => {
  console.log(`square of ${num} is ${num * num}`);
});

// what is a callback?
  // simply a function that is passed an argument in another function

// what data type does .map return?
// returns [] of values
Array.prototype.myMap = function (cb) {
  let mapped = [];
  // Testing 
  // 1. create an index.html, add a script tag with the src relating back to the js file in head 
  // open live server and inspect
  // 2. node nameOfFile

  // falsey values
  // myEach, myMap, bubbleSort
  // callbacks and closures

  // ------- 7 falsey values in JS ---------
  // false
  // null (nil in Ruby)
  // 0
  // -0
  // "" or '' or '
  // NaN
  // undefined 



  // monkey patch on the array class/object
  // my each is an iterator
  Array.prototype.myEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i]);
      // why don't we return on line 25?
      // if we return on a for loop, it would not continue the iteration
      // in the built in forEach, it returns in the block and not the scope of the function
    }
  }

  const NUMS = [1, 2, 3, 4, 5];

  NUMS.myEach((num) => {
    console.log(`square of ${num} is ${num * num}`);
  });



  Array.prototype.myMap = function (cb) {
    let mapped = [];

    this.myEach(ele => {
      mapped.push(cb(ele))
    })

    return mapped;
  }

  console.log(NUMS.myMap(function (num) {
    return num * num;
  }));

  Array.prototype.transpose = function () {
    const transposed = [];

    for (let i = 0; i < this.length; i++) {
      let sub = [];

      for (let j = 0; j < this[i].length; j++) {
        sub.push(this[j][i]);
      }

      transposed.push(sub);
    }

    return transposed;
  }

  console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())
  this.myEach(ele => {
    mapped.push(cb(ele)) // encloses the mapped variable making it available to us in the inner function
  })

  return mapped;
}

