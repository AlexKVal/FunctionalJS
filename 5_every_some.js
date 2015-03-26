module.exports = function checkUsersValid(goodUsers) {
  return function (submittedUsers) {
    return submittedUsers.every(function (submUser) {
      return goodUsers.some(function (goodUser) {
        return goodUser.id === submUser.id
      })
    })
  }
}
