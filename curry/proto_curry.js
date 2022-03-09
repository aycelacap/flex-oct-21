Function.prototype.myCurry = function(numArgs) { // integer of the amount of args
  let nums = [];
  let that = this;

  return function _myCurry(arg) {
    nums.push(arg);
    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return that(...nums);
    }
  }
}

Function.prototype.curry1 = function(numArgs) {
  const args = [];
  const fn = this;

  return function _curriedFn(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curriedFn;
    }
  }
}