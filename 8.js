function duckCount() {
  var results = []

  for (var i = 0; i < arguments.length; i++) {
    if (Object.getPrototypeOf(arguments[i])) {
      if(Object.hasOwnProperty.call(arguments[i],'quack')){
        results.push(arguments[i])
      }
    }
  }

  return results.length
}




module.exports = duckCount

// // First pre-refactored solution
// function duckCount() {
//   var results = []
//
//   for (var i = 0; i < arguments.length; i++) {
//     if (Object.getPrototypeOf(arguments[i])) {
//       if(Object.hasOwnProperty.call(arguments[i],'quack')){
//         results.push(arguments[i])
//       }
//     }
//   }
//   return results.length
// }

// // Official solution
// function duckCount() {
//   return Array.prototype.slice.call(arguments).filter(function(obj) {
//     return Object.prototype.hasOwnProperty.call(obj, 'quack')
//   }).length
// }
//
// module.exports = duckCount
