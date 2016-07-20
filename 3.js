function doubleAll(numbers) {
  var results = numbers.map(function(num){
    return num * 2
  })
  return results
}

module.exports = doubleAll

// Official Solution
// module.exports = function doubleAll(numbers) {
//    return numbers.map(function double(num) {
//      return num * 2
//    })
//  }
