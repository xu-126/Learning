let a: boolean = false;

let b: number = 20;

let c: string = "name";
c = "sex";
// 数组
let list: number[] = [1,2,3];
// 数组泛型，Arrray<元素类型>
let list2: Array<number> =  [1,2,4]

// 元组 tuple
let x: [string,number]
x = ["hello",10]

// 枚举 enum
enum Color {
    Red,
    Green,
    Blue
}
let e : Color = Color.Blue

// any
let list3: any[] = [1,true,"free"]

// void
// 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null：
let unusable: void = undefined;

// never
// never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给never 类型（除了 never 本身之外）。
function error(message:string):never{
    throw new Error(message)
}

// object
declare function create(o:object | null):void;
create({props:0}) // ok
create(null) //ok
// create(20) // error

// 类型断言
// 有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 联合类型
export type Union = string | number
export let u:Union

// 交叉类型
type Foo = {
    foo: any
  }
  
  type Bar = {
    bar : any
  }
  type Intersection =  Foo & Bar
  
  let i: Intersection = {
    foo: 'foo',
    bar: 'bar',
  }

// 索引类型
interface Obj {
    a: number
    b: string
}
let key: keyof Obj

function make<T>(args:T) {
    return args;
}
const num = make(2);

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，
// 左边是输入类型，需要用括号括起来，右边是输出类型。
// 用函数表达式定义函数
let mySum: (x: number,y: number) => number = function (x:number,y:number):number{
  return x + y;
}

// 用接口定义函数的形状
interface SearchFunc {
  (source:string,substing:string):boolean
}
let mySearch:SearchFunc;
mySearch = function (source:string,subString:string) {
  return source.search(subString) !== -1;
}
// 可选参数必须接在必需参数后面
// 函数参数默认值：
// TypeScript会将添加了默认值的参数识别为可选参数（此时就不受「可选参数必须接在必需参数后面」的限制了）

// 类型断言
// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// 值 as 类型 或者 <类型>值（不推荐）
// 类型断言的用途：
// 1.将一个联合类型断言为其中一个类型
// 2.将一个父类断言为更加具体的子类
// 3.将任何一个类型断言为 any
// 4.将 any 断言为一个具体的类型
// 类型断言的限制：
// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型