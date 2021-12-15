// falsey values
  // null (remember nil)
  // false
  // 0
  // -0
  // "" or '' or '
  // undefined
  // NaN

// my map
// my each

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]); //why don't we return out of myEach?
    //the callback is returning
  }
};

Array.prototype.myMap = function(cb) {
  let newArr = [];

  this.myEach(ele => {
    return newArr.push(cb(el));
  });
  // we can implicitly return with fat arrow functiona and omit the curly boys
  
  return newArr;
};

// [1,2,3].myEach(i => )




