async function f1() {
    return 'hello'  // 返回的值会成为then方法回调函数的参数
}
// async 函数返回一个Promise对象
f1().then(v => console.log(v))

async function f2(){
    throw new Error('出错了') //async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态
    return 'hello'
}
f2().then(
    v => console.log(v),
    e => console.log(e)  
)
// Error:出错了

// 必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，才会执行then方法指定的回调函数

// 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
let foo = await getFoo();
let bar = await getBar();
// 可以使这两个独立的异步操作同时触发
// 写法一：
let [foo,bar] = await Promise.all([getFoo(),getBar()])
// 写法二：
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;

const req = () => new Promise(res => setTimeout(() => {
    console.log('req')
    res()
}, 1000))

req().then(res => console.log(res))

// 继发执行
for (var i = 0; i < 2; i++) {
    await req()
}
// 并发执行
[1, 2].map(req)