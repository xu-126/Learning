// 理解 useEffect 流程 demo
import React, { useEffect,useState } from 'react';
const Demo = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        const clear = () => {
            console.log('clear ' + count)
        }
        setTimeout(() => {
            console.log('setTimeout --- ' + count )
        },2000)
        // console.log('count === ' + count);
        return clear();
    },[count])
    return (
        <div>
            <button onClick={() => setCount(count +  1)}>按钮</button>
            <p> You've click {count} times</p>
        </div>
    )
}

export default Demo;