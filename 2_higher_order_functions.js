module.exports = function repeat(operation, num) {
  if (num === 0) return

  // for (var i = 0; i < num; i++) {
    operation()
  // }

  num--
  repeat(operation, num)
}
