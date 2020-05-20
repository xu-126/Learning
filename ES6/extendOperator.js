// 扩展运算符
// 1. arguments 转数组
const sortNumbers = (...numbers) => numbers.sort();
console.log(sortNumbers(6,2,3))  // [2,3,6]

// 2. 调用参数
Math.max(...[2,3,6])

// 3. 合并对象
let obj1 = { a: 1, b: 2,c: 3 }
let obj2 = { b: 4, c: 5, d: 6}
let merged = {...obj1, ...obj2};


// 双冒号运算符
// foo::bar 等同于 bar.bind(foo)
// foo::bar(...arguments) 等同于 bar.apply(foo,arguments)
// 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。
// var method = obj::obj.foo;
// 等同于
// var method = ::obj.foo;

