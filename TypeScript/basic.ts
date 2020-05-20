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

