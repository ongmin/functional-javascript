var slice = Array.prototype.slice

function logger(namespace) {
  return function () {
    var args = slice.call(arguments)
    console.log.apply(null, [namespace].concat(args))
  }
}

module.exports = logger

// // The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length.
// // For example, it does not have the pop method. However it can be converted to a real Array:
// Array.prototype.slice.call(arguments)

// The arity of a function or operation is the number of arguments or operands that the function takes.

// Use .apply not .call
