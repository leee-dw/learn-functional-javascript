const users = [
  { id: 0, name: 'ID', age: 36 },
  { id: 1, name: 'BJ', age: 32 },
  { id: 2, name: 'JM', age: 32 },
  { id: 3, name: 'PJ', age: 27 },
  { id: 4, name: 'HA', age: 25 },
  { id: 5, name: 'JE', age: 26 },
  { id: 6, name: 'JI', age: 31 },
];

const tempUsers = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    tempUsers.push(users[i]);
  }
}


const names = [];
for (let i = 0; i < tempUsers.length; i++) {
  names.push(tempUsers[i].name);
}


console.log(names);

const tempUsers2 = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    tempUsers2.push(users[i]);
  }
}

console.log(tempUsers2);

const ages = [];


for (let i = 0; i < tempUsers.length; i++) {
  ages.push(tempUsers[i].age);
}

console.log(ages);



function _filter(list, predict) {
  var newList = [];
  for ( var i = 0; i < list.length; i++ ) {
    if (predict(list[i])) {
      newList.push(list[i])
    }
  }
  return newList
}


function _map(list, mapper) {
  let newList = [];
  list.forEach( v => {
    newList.push(mapper(v))
  })
  return newList
}





var over30 = _filter(users, function(user) { return user.age >= 30 })
var under30 = _filter(users, function(user) { return user.age < 30 })

var userNames = _map(over30, function(user){
  return user.name
})
console.log("userNames:", userNames)

var userAges = _map(under30, function(user){
  return user.age
})
console.log("userAges:", userAges)

console.log (
  _filter([1,2,3,4,5], function(num) { return num % 2 }),
  _filter([1,2,3,4,5], function(num) { return !(num % 2) })
)

console.log(_map([1, 2, 3, 4, 5], function(num){ return num * 2}))

