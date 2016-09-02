function reduce(arr, fn, initial) {
  if (!arr.length){ return initial }
  var currentValue = arr[0]
  var newArray = arr.slice(1)
  return reduce(newArray, fn, fn(initial, currentValue))
}

module.exports = reduce


// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value
//     return reduceOne(index + 1, fn(value, arr[index], index, arr))
//   })(0, initial)
// }
//
// module.exports = reduce
//
//
// "use strict";
//
// function reduce(arr, fn, initial) {
//   if (!arr.length) return initial;
//   var head = arr[0],
//       tail = arr.slice(1);
//   return reduce(tail, fn,  fn(initial, head));
// }
//
// module.exports = reduce;
