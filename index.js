var users = [
  { id: 0, name: 'ID', age: 36 },
  { id: 1, name: 'BJ', age: 32 },
  { id: 2, name: 'JM', age: 33 },
  { id: 3, name: 'PJ', age: 27 },
  { id: 4, name: 'HA', age: 25 },
  { id: 5, name: 'JE', age: 26 },
  { id: 6, name: 'JI', age: 31 },
  { id: 7, name: 'MP', age: 23 },
]


// 명령형 코드
// 1. 30세  이상인 users를 거른다.
var tempUsers = []
for (var i = 0; i < users.length; i++) {
  if (users[i].age >= 30) tempUsers.push(users[i])
}
console.log(tempUsers)

// 2. 30세 이상인 users의 name을 수집.

var names = []
for (var i = 0; i < tempUsers.length; i++) {
  names.push(tempUsers[i].name)
}
console.log(names)


// 3. 30세 미만인 users를 거른다.
var tempUsers = []
for (var i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    tempUsers.push(users[i])
  }
}
console.log(tempUsers)


// 4. 30세 미만인 users의 ages를 수집한다.
var ages = []
for (var i = 0; i < tempUsers.length; i++) {
  ages.push(tempUsers[i].age)
}
console.log(ages)



// 2. _filter, _map으로 리팩토링.

function _filter(users = [], predicate) {
  var newList = []
  for (var i = 0; i < users.length; i++) {
    if (predicate(users[i])) {
      newList.push(users[i])
    }
  }
  return newList
}



function _map(list = [], mapper) {
  var newList = []
  for (var i = 0; i < list.length; i++) {
    newList.push(mapper(list[i]))
  }
  return newList
}


var over30 = _filter(users, function(user) { return user.age >= 30 })
var under30 = _filter(users, function(user) { return user.age < 30 })


console.log(
  _filter(users, function(user) { return user.age >= 30 }),
  _filter(users, function(user) { return user.age < 30 }),
  _filter([1, 2, 3, 4], function(num) { return num % 2 }),
  _filter([1, 2, 3, 4], function(num) { return !(num % 2) })
)
console.log(over30)

var names = _map(over30, function(user) { return user.name })
console.log(names)

var ages = _map(under30, function(user) { return user.age })
console.log(ages)




console.log(
  _map(
    _filter(users, function(user) { return user.age >= 30 }),
    function(user) { return user.name }
  )
)

console.log(
  _map(
    _filter(users, function(user) { return user.age < 30 }),
    function(user) { return user.age }
  )
)