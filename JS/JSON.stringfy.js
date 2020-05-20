const product = {
    id:1,
    name:'Jack',
    type:'food'
}
console.log(JSON.stringify(product,['type'])) // 第二个参数：数组

const val = JSON.stringify(product,(key,value)=> { // 第二个参数为函数
    if(typeof value !== 'string') {
        return value;
    }
    return undefined;
})
console.log(val)