var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
]

const filter = (list, predicate) => {
  let newList = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) {
      return newList.push(list[i]);
    };
    
    return newList;
  }
}

function map(list, iteratee) {
  let newList = [];
  for (var i = 0, len = list.length; i < len; i++) {
    console.log(i);

    newList.push(iteratee(list[i]));
  }
  return newList;
}

function logLength(val) {
  return val;
}


console.log(logLength(map(filter(users, (user) => user.age < 30), (user) => user.age)));
// console.log(logLength(map(filter(users, (user) => user.age >= 30), (user) => user.name)));