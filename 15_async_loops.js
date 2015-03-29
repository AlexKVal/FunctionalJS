function loadUsers(userIds, load, done) {
  var users = []
  var counterForLoaded = 0

  userIds.forEach(function (id, indx) {
    load(id, function (user) {
      users[indx] = user
      counterForLoaded++

      if (counterForLoaded === userIds.length)
        done(users)
    })
  })
}

module.exports = loadUsers
