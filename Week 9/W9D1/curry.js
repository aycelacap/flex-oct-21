// binarySearch
// mergeSort
// curry(you can show it with optional numArgs parameter if monkey - patched)
// quickSort
// myBind
// myApply
// myCall

function curryWithContext(func, context, numArgs) {
  const args = [];

  return function _curryWithContext(...elements) {
    args.push(...elements);

    if (args.length < numArgs) {
      return _curryWithContext
    }

    return func.apply(context, args.slice(0, numArgs))
  }
}



const ayce = {
  name: "ayce",
  age: 100,
  sayName: function () {
    debugger
    console.log(this.name)
  },
  greet: function (...greetings) {
    const greetingsString = greetings.join(", ");
    return `${greetingsString} my name is ${this.name}`;
  }
}

const amin = {
  name: "amin",
  age: 300
}


console.log(curryWithContext(ayce.greet, amin, 4)('Hi')('Hello')('Wassup')('Yo'));

// Hi, Hello, Wassup, Yo my name is amin