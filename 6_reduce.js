module.exports = function countWords(inputWords) {
  return inputWords.reduce(function (countersMap, word) {
    countersMap[word] = (countersMap[word] || 0) + 1
    return countersMap
  }, {})
};
