var Spy = module.exports = function Spy(target, method) {
  var counter = { count: 0 }
  var originalMethod = target[method]

  target[method] = function () {
    counter.count++
    return originalMethod.apply(target, arguments)
  }

  return counter
};
