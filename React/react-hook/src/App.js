import React, { useState, useEffect } from 'react';
import { Spin, Tabs } from "antd";
import "antd/dist/antd.css";
import TodoInput from './Input'
import TodoList from './TodoList'
import { fetchTodos,toggleTodo,handleDelete } from './api'
import { useRequest, useWithLoading } from './hooks'
import Demo from './demo'

import "./styles/styles.css";

const { TabPane } = Tabs;

const TAB_ALL = "all"
const TAB_FINISHED = "finished"
const TAB_UNFINISHED = "unfinished"
const tabMap = {
  [TAB_ALL]: "全部",
  [TAB_FINISHED]: "已完成",
  [TAB_UNFINISHED]: "待完成"
}


function App() {

  const [activeTab, setActiveTab] = useState(TAB_ALL);

  const [placeholder, setPlaceholder] = useState("在全部内搜索");
  useEffect(() => {
    setPlaceholder(`在${tabMap[activeTab]}内搜索`)
  }, [activeTab])

  //获取数据
  // const [loading, setLoading] = useState(false)
  // const [todos, setTodos] = useState([])
  // useEffect(() => {
  //   setLoading(true)
  //   fetchTodos({tab: activeTab})
  //       .then(result => {
  //           // console.log(result)
  //           setTodos(result.result)
  //       })
  //       .finally(() => {
  //           setLoading(false)
  //       })
  // }, [activeTab])


  // 自定义useRequest 获取数据
  const [query, setQuery] = useState("");
  const { loading: listLoading, data} = useRequest(() => {
    return fetchTodos({query,  tab: activeTab });
  }, [query, activeTab])


  // 完成finished状态切换后重新渲染
  const { func: onToggleFinished, loading: toggleLoading } = useWithLoading(
    async id => {
      await toggleTodo(id);
    }
  );
// 完成删除操作
  const {func:onDelete , loading:deleteLoading } = useWithLoading(
    async id => {
      await handleDelete(id);
    }
  )
  // !!后面变量有内容才执行
  const loading = !!listLoading || !!toggleLoading || !!deleteLoading;

  return (
    <>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab={tabMap[TAB_ALL]} key={TAB_ALL} />
        <TabPane tab={tabMap[TAB_FINISHED]} key={TAB_FINISHED} />
        <TabPane tab={tabMap[TAB_UNFINISHED]} key={TAB_UNFINISHED} />
      </Tabs>
      <div className="app-warp">
        <h1>Todo List</h1>
        <TodoInput placeholder={placeholder} onSetQuery={setQuery} />
        <Spin spinning={loading} tip="稍等片刻~">
          <TodoList todos={data} onToggleFinished={onToggleFinished} onDelete={onDelete}/>
        </Spin>
        <Demo />
      </div>
    </>
  );
}

export default App;
