module.exports = Array.prototype.slice.call.bind(Array.prototype.slice)

// var slice = Array.prototype.slice.call.bind(Array.prototype.slice)
//
// function probe() {
//   console.dir(arguments);
//   var args = slice(arguments)
//   console.dir(args);
// }
//
// probe('f', 'b', 'c')
