//Test.tsx文件
import React, { FC, Fragment, useRef, MutableRefObject, forwardRef, ForwardRefExoticComponent, Ref, useImperativeHandle, ChangeEvent, SyntheticEvent, memo, useState } from "react";
const Test: FC = (): JSX.Element => {
    const testRef: MutableRefObject<any> = useRef();
    const handleClick = (e:SyntheticEvent<HTMLButtonElement>):void =>{
        console.log('自身button的内容：',e.currentTarget.innerText);
        console.log('子组件input的对象:',testRef.current);
        console.log('子组件input的value值：',testRef.current.value);
        console.log('子组件input的类型：',testRef.current.type());
    }
    return (
        <Fragment>
            <TestChildForward ref={testRef} />
            <button onClick={handleClick}>获取子组件的input的value和type</button>
        </Fragment>
    );
}
export default Test;
function TestChild(props:{},ref: Ref<any>): JSX.Element {
    const testRef: MutableRefObject<any> = useRef();//创建一个自身的ref，绑定到标签节点上
    //暴露出一个想要让父组件知道的对象,里面可以是属性也可以是函数
    useImperativeHandle(ref,()=>{//第一个参数，要暴露给哪个(ref)？第二个参数要暴露出什么？
        return {
            //(testRef.current as HTMLInputElement) 类型断言，自己肯定就是这样的类型
            value:(testRef.current as HTMLInputElement).value,//暴露出input的value
            type:()=>(testRef.current as HTMLInputElement).type//暴露出input的type类型
        }
    });
    const [value,setValue] = useState("input的内容");
    return (
        <>
            <input type="text"  ref={testRef}  value={value} onChange={e=> setValue(e.target.value)}/>
        </>
    );
}
const TestChildForward:ForwardRefExoticComponent<any> = memo(forwardRef(TestChild));
