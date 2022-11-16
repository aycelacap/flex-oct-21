Function.prototype.myApply = function(ctx, callArgs = []) {
  return this.bind(ctx, ...callArgs)();
  // return this.bind(ctx)(...callArgs)
};

Function.prototype.myCall = function(ctx, ...callArgs) {
  return this.bind(ctx, ...callArgs)();
  // return this.bind(ctx)(...callArgs)
}

// const args = [];

// return function _curryWithContext(...elements) {
//   args.push(...elements); // comma separated, no need to iterate over elements

//   if (args.length < numArgs) {
//     return _curryWithContext;
//   }

//   return func.apply(context, args.slice(0, numArgs)); //The slice() method returns a shallow copy of a portion of an array into a new array object
// }