// console.log("========================================CURRY========================================")







var add = _curry(function(a, b) {
  return a + b
})

var sub = _curryr(function(a, b) {
  return a - b
})


// console.log(sub(10, 5))

var sub10 = sub(10)
// console.log(sub10(18))


// 2. _get 만들어 좀 더 간단하게 하기.
var user1 = users[0]
// console.log(_get('name')(user1))
var getName = _get('name')
// console.log(_map(_filter(users, user => user.age >= 30), _get('name')))






