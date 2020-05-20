// Array.reduce()方法更加灵活，它可以返回任何值。其目的是将数组中的每个值（从左到右）开始缩减，最终计算为一个值。
// 该值可以是数字，字符串，甚至是对象或新数组。
// Array.reduce()接受2个参数：一个是函数、一个是初始值
// 回调函数可接收4个参数：accumulator：初始值, 或者计算结束后的返回值。current：当前元素。index：当前元素的索引。arr：当前元素所属的数组对象。
// var myNewArray = [].reduce(function(accumulator, current, index, arr){
//     return accumulator;
// },initialValue)
// 1. 数组求和
var total = [1, 2, 3].reduce(function (sum, cur) {
    console.log(sum+cur)  // 1  3  6 
    return sum + cur;
}, 0);
console.log(total) // 6

// 2. 实现filter()、map()组合功能

var wizards = [
    {
      name: "Harry Potter",
      house: "Gryfindor",
    },
    {
      name: "Cedric Diggory",
      house: "Hufflepuff",
    },
    {
      name: "Tonks",
      house: "Hufflepuff",
    },
    {
      name: "Ronald Weasley",
      house: "Gryfindor",
    },
    {
      name: "Hermione Granger",
      house: "Gryfindor",
    },
  ];
let hufflepuff = wizards.reduce((newArr, wizard) => {
  if (wizard.house === "Hufflepuff") {
    newArr.push(wizard.name);
  }
  return newArr;
}, []);
console.log(hufflepuff)

// 3. 创建Html标签
let hufflepuffList = "<ul>"+wizards.reduce((html,wizard) => {
    if(wizard.name === "Hufflepuff") {
        html += "<li>"+wizard.name+"</li>"
    }
},"")+"</ul>"

// 4. 按条件元素分组
// lodash库具有一种groupBy()方法
// Array.reduce()实现groupBy()
let groupBy = (arr,criteria) => {
    return arr.reduce((obj,item) => {
        let key = typeof criteria === 'function'? criteria(item) : item[criteria]
        if(!obj.hasOwnProperty(key)){
            obj[key] = []
        }
        obj[key].push(item)
        return obj
    },{})
}
console.log(groupBy(['saui','dh','dainsdc'],"length"))












