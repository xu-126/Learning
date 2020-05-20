import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button, List } from 'antd'
import store from './store'

// const data=[
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        //关键代码------------start----------
        this.clickBtn = this.clickBtn.bind(this)
        //关键代码------------end----------
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    
        render() { 
            return ( 
                <div style={{margin:'10px'}}>
                    <div>
    
                        <Input onChange={this.changeInputValue} value={this.state.inputValue } placeholder={this.state.inputValue} style={{ width:'250px', marginRight:'10px'}}/>
                        <Button type="primary" onClick={this.clickBtn}>增加</Button>
                    </div>
                    <div style={{margin:'10px',width:'300px'}}>
                        <List
                            bordered
                            //关键代码-----------start
                            dataSource={this.state.list}
                            //关键代码-----------end
                            renderItem={item=>(<List.Item>{item}</List.Item>)}
                        />    
                    </div>
                </div>
             );
        }
        changeInputValue(e){
            const action = {
                type:'changeInput',
                value:e.target.value
            }
            store.dispatch(action)
        }
        clickBtn(){
            const action = { type:'addItem'}
            store.dispatch(action)
         }
        storeChange(){
            this.setState(store.getState())
        }
    }
    export default TodoList;