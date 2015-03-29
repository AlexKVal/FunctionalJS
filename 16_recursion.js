function getDependencies(tree) {
  if (!tree) return []

  var result = []

  var depEntries = tree.dependencies || []

  Object.keys(depEntries).forEach(function (name) {
    var depEntry = depEntries[name]

    getDependencies(depEntry).concat([name+'@'+depEntry.version])
      .forEach(function (depString) {
        if (-1 === result.indexOf(depString)) result.push(depString)
      })
  })

  return result.sort()
}

module.exports = getDependencies
