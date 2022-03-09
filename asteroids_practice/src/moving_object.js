function MovingObject(options) {
  this.pos = options.pos; // data type of an array
  this.vel = options.vel; // array
  this.radius = options.radius; // integer
  this.color = options.color; // can be written like like so
  // this.color = options['color']; // 
};

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false // optional boolean value to draw the circle counterclockwise
  );

  ctx.fill();
};

module.exports = MovingObject;

