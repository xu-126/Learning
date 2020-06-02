// 延迟函数
const delay = time => new Promise((resolve) => setTimeout(resolve,time)
)

const test = async() => {
    await delay(1000)
    console.log('我是需要1s后执行的方法！')
}
test()
// const getData = status => new Promise((resolve,reject) => {
//     status? resolve('done') : reject('reject')
// })
// const getRes = async(data) => {
//     try {
//         const res = await getData(data);
//         const timestamp = new Date().getTime()
//         await delay(1000)
//         console.log(res,new Date().getTime() - timestamp)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getRes(true)

// 分割指定长度的数组
const listChunk = (list,size = 1, cacheList = []) => {
    const tmp = [...list]
    if(size <= 0) {
        return cacheList
    }
    while(tmp.length){
        cacheList.push(tmp.splice(0, size))
    }
    return cacheList
}
console.log(listChunk([0,0,0,1,1,1,2,2,2],3))

// 获取数组交集
const intersection = (list, ...args) => list.filter(item => args.every(list => list.includes(item)))

console.log(intersection([2, 1], [2, 3])) // [2]
console.log(intersection([1, 2], [3, 4])) // []

//  正则把字符串前面空格去除与替换
const trimStart = str => str.replace(new RegExp('^([\\s]*)(.*)$'), '$2')
console.log(trimStart(' abc ')) // abc  
console.log(trimStart('123 ')) // 123  
// 正则把字符串后面空格去除与替换
const trimEnd = str => str.replace(new RegExp('^(.*?)([\\s]*)$'), '$1')
console.log(trimEnd(' abc ')) //   abc  
console.log(trimEnd('123 ')) // 123  


// 判断是否移动端
const isMobile =  () => 'ontouchstart' in window

// 禁止网页复制粘贴
const html = document.querySelector('html')
html.oncopy = () => false
html.onpaste = () => false
