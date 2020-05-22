import React, { memo,useMemo } from 'react'

const ChildMemo = (props)  => {
    const {name , onClick} = props;
    console.log('ChildMemo运行了！！');
    return (
        <div>
            <h3 style={{color: name.color}}>这是父组件传过来的数据name==={name.name}</h3>
           <button onClick={onClick.bind(null,'newName')}>改变name</button>
        </div>
    )
}

export default memo(ChildMemo);