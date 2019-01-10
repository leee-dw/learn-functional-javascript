// console.clear()



// console.log(_map(_filter(users, function(user) { return user.age >= 30 }), _get('name')))
// console.log(_map(_filter(users, function(user) { return user.age < 30 }), _get('age')))





_go(users,
  _filter(user => user.age >= 30),
  _map(_get('name')),
  console.log
)



_go(users,
  _filter(user => user.age < 30),
  _map(_get('age')),
  console.log
)


// 추상화의 단위를 함수로 하는 프로그래밍








// _go(users,
//   _filter(function(user) { return user.age < 30 }),
//   _map(_get('name')),
//   console.log
// )




// _go(users,
//   function(users) {
//     return _filter(users, function(user) {
//       return user.age < 30
//     })
//   },

//   function(users) {
//     return _map(users, _get('age'))
//   },

//   console.log
// )




// console.log(_map([1, 2, 3], function(val) {return val * 2}))
// console.log(_map(function(val) { return val * 2 })([1, 2, 3]))