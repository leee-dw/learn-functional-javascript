let users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "DA", age: 12 },
  { id: 3, name: "GD", age: 64 },
  { id: 4, name: "HB", age: 23 },
  { id: 5, name: "YE", age: 53 },
  { id: 6, name: "PN", age: 29 },
];


const filter = (list, predict) => {
  let newList = [];
  list.forEach(el => predict(el) && newList.push(el))
  return newList;
}

const map = (list, iteratee) => {
  let newList = [];
  list.forEach(el => newList.push(iteratee(el)));
  return newList;
}

let ages = map(
  filter(users, function (user) {
    return user.age < 30
  }),
  user => user.age);

let names = map(
  filter(users, function (user) {
    return user.age >= 30
  }),
  user => user.name);


console.log(ages, names);