// 1. convert to number
const age = "3";
const ageConvert = +age;
typeof ageConvert; // number

// 2. convert to string
let a = 123;
a + " "; // "123"

// 3. performance 测试js代码执行耗时
// let start = performance.now();
// let sum = 0;
// for (let i = 0; i < 100000; i++) {
//   sum += 1;
// }
// let end = performance.now();
// console.log(start)
// console.log(end)

// 4.数组扁平化 flatten
// 4.1 利用 reduce
var arr = [1,[2,[3,4]]];
function flatten(arr) {
    return arr.reduce(function(pre,next){
        return pre.concat(Array.isArray(next) ? flatten(next): next)
    },[])
}
console.log(flatten(arr)) // [1, 2, 3, 4]
// 4.2 直接递归
function flatten2(arr) {
    let result = []
    for (i= 0 ; i < arr.length ; i ++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten2(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flatten2(arr)) // [1, 2, 3, 4]

let arr2 = [0, 1, 2, 3, 4, 5];
const last = arr2.slice(-1);
console.log('last===' + last);