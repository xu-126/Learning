// {} 解构赋值
componentWillReceiveProps({active}) {
    this.setState({active})
}

handleEvent = () => {
    this.setState(({data}) => ({
        data: data.set("key","value")
    }))
}

// 对象深度解构
function test({name} = {}) { 
    console.log(name || 'unknown')
 }

// 数组解构
// bad
const spliteLocale = locale.splite("-");
const language = spliteLocale[0];
const country = spliteLocale[1];
// good
const [language, country] = locale.splite('-');

// 仅获取部分属性
function test(input) {
    return { left, right, top, bottom };
}
const { left, right } = test(input);