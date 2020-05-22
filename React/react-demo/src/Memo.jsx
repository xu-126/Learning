import React, { useState , useMemo, useCallback} from 'react';
import ChildMemo from './ChildMemo'

// 在子组件不需要父组件的值和函数的情况下，只需要使用memo函数包裹子组件即可。
// 而在使用值和函数的情况，需要考虑有没有函数传递给子组件使用useCallback，
// 值有没有所依赖的依赖项而使用useMemo

const Memo = ()  => {
    const [count, setCount] = useState(100);
    const [name,setName] = useState('name')
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count+ 100)}>➕100按钮</button>
            <ChildMemo name={useMemo(() => ({name,color:name.indexOf('name')!== -1 ? 'red': 'green'}),[name])} 
            onClick={useCallback((newName) => setName(newName))}/>
        </div>
    )
}

export default Memo;