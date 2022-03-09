Function.prototype.myApply = function(ctx, callArgs = []) {
  return this.bind(ctx, ...callArgs)();
  // return this.bind(ctx)(...callArgs)
};

Function.prototype.myCall = function(ctx, ...callArgs) {
  return this.bind(ctx, ...callArgs)();
  // return this.bind(ctx)(...callArgs)
}