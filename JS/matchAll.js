// String.prototype.matchAll
const test = "climbing, oranges, jumping, flying, carrot";

const regex = /([a-z]*)ing/g;

const matches = [...test.matchAll(regex)];

const result = matches.map(match => match[1]);

console.log(result)

// 可选链操作符
const test2 = {
    name: "foo",
    age: 25,
    address: {
      number: 44,
      street: "Sesame Street",
      city: {
        name: "Fake City",
        lat: 40,
        lon: 74
      }
    }
  }
//   if (test2?.address?.city?.name) {
//     console.log("City name exists!");
//   }
  
// 空位合并运算符 ？？
const person = {
    name: "Dave",
    age: 30,
    squadNumber: 0
};
const squadNumber = person.squadNumber || "unassigned";   // unassigned

// Nullish Coalescing Operator
// If person.squadNumber is null or undefined
// set squadNumber to unassigned
const squadNumber = person.squadNumber ?? "unassigned";

console.log(`${person.name}‘s squad number is ${squadNumber}`); // 0

