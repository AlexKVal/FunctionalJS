// using recursion
module.exports = function duckCount() {
  if (!arguments.length) return 0

  var args = Array.prototype.slice.call(arguments)
  var val = Object.prototype.hasOwnProperty.call(args.pop(), 'quack') ? 1 : 0
  return duckCount.apply(this, args) + val
};
