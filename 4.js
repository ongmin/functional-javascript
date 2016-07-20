function getShortMessages(messages) {
  var filteredArray = messages.filter(function(msg){ return msg.message.length < 50 })

  return filteredArray.map(function(msg){
    return msg.message
  })

}

module.exports = getShortMessages

// Official Solution
// module.exports = function getShortMessages(messages) {
//   return messages.filter(function(item) {
//     return item.message.length < 50
//   }).map(function(item) {
//     return item.message
//   })
// }
