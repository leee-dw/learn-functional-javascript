var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 5, name: "JM", age: 32 },
  { id: 5, name: "HI", age: 24 },
]


////////////////////////////////////////////////////////////////////////////////////

/* 
for (var i = 0, len = users.length; i < len; i++) {
  if (users[i].age < 30) tempUsers.push(users[i]);
}
console.log("tempUsers: ", tempUsers);
 */

const filter = (list, predicate) => {
  let newList = [];
  list.forEach(el => predicate(el) && newList.push(el));
  return newList;
}


const tempUsers = [];
const names = [];

const usersUnder30 = filter(users, user => user.age < 30);
const usersOver30 = filter(users, user => user.age >= 30);
usersOver30.forEach(el => names.push(el.name));



console.log(usersUnder30);
console.log("---------------------------------------");
console.log(usersOver30);
console.log("---------------------------------------");
console.log(names);




////////////////////////////////////////////////////////////////////////////////////
// var ages = [];
// for (var i = 0, len = usersUnder30.length; i < len; i++) {
// ages.push(usersUnder30[i].age);
// }
// console.log("ages: ", ages);


// var tempUsers = [];
// for (var i = 0, len = users.length; i < len; i++) {
//   if (users[i].age >= 30) tempUsers.push(users[i]);
// }
// console.log(tempUsers.length, tempUsers);

// ////////////////////////////////////////////////////////////////////////////////////

// var names = [];
// for (var i = 0, len = tempUsers.length; i < len; i++) {
//   names.push(tempUsers[i].name);
// }
// console.log(names);

////////////////////////////////////////////////////////////////////////////////////