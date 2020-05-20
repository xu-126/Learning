import React, { useState } from "react";
import { Input } from "antd";

function TodoInput(props){
    const { placeholder,onSetQuery } = props
    const [value, setValue] = useState("");

    const onAdd = () => onSetQuery(value)

    return (
        <Input
            value={value}
            onChange={e=> setValue(e.target.value)}
            placeholder={placeholder}
            onPressEnter={onAdd}
        />
    )
}
export default TodoInput;