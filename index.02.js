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



function _filter(users) {
  var newList = [];
  for ( var i = 0; < users.length; i++) {
    if (users[i].age >= 30) {
      newList.push(users[i])
    }
  }
  return newList
}

