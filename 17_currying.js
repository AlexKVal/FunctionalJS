function curryN(fn, n) {
  n = n || fn.length
  // console.log('n:',n);
  var args = []
  var isFinished = false
  var lastArgIndx = 0

  function innerFun(one) {

    if (!isFinished) {
      args.push(one)
      lastArgIndx = args.length-1
      // console.log('args:', args);
      if (args.length === n) {
        isFinished = true
      }
      else {
        return innerFun
      }
    }
    args[lastArgIndx] = one
    return fn.apply(fn, args)
  }

  return innerFun
}

module.exports = curryN

function add3(one, two, tree) {
  // console.log('fn: one', one, 'two', two, 'tree', tree);
  // console.dir(arguments);
  return one + two + tree
}
//
// console.log(curryN(add3)(12)(2)(3));
//
// var C = curryN(add3)
// var B = C(1)
// var A = C(2)
// console.log(A(3))
// console.log(A(10))
