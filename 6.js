function countWords(inputWords) {
  var results = {}
  inputWords.reduce(function(previousWord, currentWord, currentIndex, array){
    if (!results[currentWord]){
      results[currentWord] = 1
    } else {
      results[currentWord]++
    }
  }, 0)
  return results
}

module.exports = countWords
