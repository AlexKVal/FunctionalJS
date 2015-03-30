function curryN(fn, n) {
  n = n || fn.length
  // console.log('n:',n);
  var args = []

  function innerFun(one) {
    args.push(one)
    // console.log('args:', args);
    if (args.length === n) return fn.apply(fn, args)
    return innerFun
  }

  return innerFun
}

module.exports = curryN

function add3(one, two, tree) {
  // console.log('fn: one', one, 'two', two, 'tree', tree);
  // console.dir(arguments);
  return one + two + tree
}

// console.log(curryN(add3)(12)(2)(3));

var C = curryN(add3)
var B = C(1)
var A = C(2)
console.log(A(10))
console.log(A(3))
