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


// // 명령형 코드
// // 1. 30세  이상인 users를 거른다.
// var tempUsers = []
// for (var i = 0; i < users.length; i++) {
//   if (users[i].age >= 30) tempUsers.push(users[i])
// }
// // 2. 30세 이상인 users의 name을 수집.

// var names = []
// for (var i = 0; i < tempUsers.length; i++) {
//   names.push(tempUsers[i].name)
// }

// // 3. 30세 미만인 users를 거른다.
// var tempUsers = []
// for (var i = 0; i < users.length; i++) {
//   if (users[i].age < 30) {
//     tempUsers.push(users[i])
//   }
// }

// // 4. 30세 미만인 users의 ages를 수집한다.
// var ages = []
// for (var i = 0; i < tempUsers.length; i++) {
//   ages.push(tempUsers[i].age)
// }



// console.log(Array.from(document.querySelectorAll('*')))
// console.log(_map(document.querySelectorAll('*'), node => node.nodeName))


// var over30 = _filter(users, user => user.age >= 30)
// var under30 = _filter(users, user => user.age < 30)
// var names = _map(over30, user => user.name)
// var ages = _map(under30, user => user.age)


// console.log(
//   _filter(users, user => user.age >= 30),
//   _filter(users, user => user.age < 30),
//   _filter([1, 2, 3, 4], num => num % 2),
//   _filter([1, 2, 3, 4], num => !(num % 2))
// )
// console.log(over30)
// console.log(names)
// console.log(ages)
// console.log(_map(_filter(users, user => user.age >= 30), user => user.name))
// console.log(_map(_filter(users, user => user.age < 30), user => user.age))



