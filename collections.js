// console.clear()

function _values(data) {
  return _map(data, _identity)
}

var _values = _map(_identity)


function _identity(val) {
  return val
}

// console.log(users[0])
console.log(_keys(users[0]))
console.log(_values(users[0]))
console.log(_map(_identity)(users[2]))



function _pluck(data, key) {
  return _map(data, _get(key))
}


console.log(_pluck(users, 'id'))
console.log(_pluck(users, 'name'))
console.log(_pluck(users, 'age'))



console.log(
  _filter(users, function(user){
    return user.age > 30
  })
)

console.log(
  _reject(users, function(user){
    return user.age > 30
  })
)