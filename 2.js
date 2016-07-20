function repeat(operation, num) {
    while (num > 0){
      operation.call(this)
      num--
    }
}

    // Do not remove the line below
    module.exports = repeat

// // Official Solution
// function repeat(operation, num) {
//    if (num <= 0) return
//    operation()
//    return repeat(operation, --num)
//  }
//
//  module.exports = repeat
