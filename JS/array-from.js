// Array.from(object,mapFunction,thisValue)
// 第二个参数,可选，数组中每个元素都要调用的函数
// 1. clone an array
function recursiveClone(val) {
    return Array.isArray(val) ? Array.from(val,recursiveClone) : val;
}
const numbers = [[0, 1, 2], ['one', 'two', 'three']];
const numbersClone = recursiveClone(numbers);
console.log(numbersClone);

// 2. fill an array with values
const len = 3;
const init = 0;
const result = Array.from({length},() => init)
result; // => [0,0,0]

// 3. fill an array with new objects
const len = 3;
const resultA = Array.from({length},() => ( {} ))
resultA; // => [{},{},{}]
resultA[0] === resultA[1];  // => false

// 4. generate ranges of numbers
function range(end) {
    return Array.from( { length: end },(_,index) => (index,console.log(_)) )
}
range(3) // => [0,1,2]