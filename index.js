// 일급함수

const f1 = a => a * a;

console.log(f1);

function f2(f) {
  return f();
}

console.log(f2(() => 10));


function addMaker(a) {
  return function (b) {
    return a + b;
  };
}

const add10 = addMaker(10);

console.log(add10(20));

const add5 = addMaker(5);
const add15 = addMaker(15);

console.log(add5(10));
console.log(add15(10));

function f4(a1, a2, a3) {
  return a3(a1() + a2());
}


console.log(f4(
  () => 2,
  () => 1,
  a => a * a,
));
