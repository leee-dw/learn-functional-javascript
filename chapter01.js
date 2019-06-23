
let users = [
  { id: 0, name: 'ID', age: 36 },
  { id: 1, name: 'BJ', age: 32 },
  { id: 2, name: 'JM', age: 33 },
  { id: 3, name: 'PJ', age: 27 },
  { id: 4, name: 'HA', age: 25 },
  { id: 5, name: 'JE', age: 26 },
  { id: 6, name: 'JI', age: 31 },
  { id: 7, name: 'MP', age: 23 }
]

// 1. 명령형 코드
// 1. 30세 이상인 users를 거른다.

let tempUsers = []
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    tempUsers.push(users[i])
  }
}
console.log(tempUsers)

// 2. 30세 이상인 users의 names를 수집한다.
// let names = []
// for (let i = 0; i < tempUsers.length; i++) {
//   names.push(tempUsers[i].name)
// }
// console.log(names)

// 3. 30세 미만인 users를 거른다
// let tempUsers2 = []
// for (let i = 0; i < users.length; i++) {
// if (users[i].age < 30) {
//   tempUsers2.push(users[i])
// }
// }

// 4. 30세 미만인 users의 ages를 수집한다.
// let ages = []
// for (let i = 0; i < tempUsers2.length; i++) {
//   ages.push(tempUsers2[i].age)
// }
// console.log(ages)

// 2. _filter, _map으로 리팩토링

function _filter (users, predicate) {
  let newList = []
  for (let i = 0; i < users.length; i++) {
    if (predicate(users[i])) {
      newList.push(users[i])
    }
  }
  return newList
}

function _map (list, mapper) {
  let newList = []
  for (let i = 0; i < list.length; i++) {
    newList.push(mapper(list[i]))
  }
  return newList
}

let over30 = _filter(users, user => user.age >= 30)
let names = _map(over30, user => user.name)

let under30 = _filter(users, user => user.age < 30)
let ages = _map(under30, user => user.age)

console.log(ages)
console.log(names)

// console.log(_filter(users, user => user.age < 30))
// console.log(_map(users, user => ))
