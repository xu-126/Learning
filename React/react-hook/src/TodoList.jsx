import React from "react";
import { List} from "antd";
import { Icon } from '@ant-design/compatible';
import classNames from "classnames";

const TodoList = ({ todos, onToggleFinished,onDelete }) => {
  

  return (
    <div className="list-wrap">
      {!todos || todos.length === 0 ? (
        <p>暂无待办事项</p>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={todos.result}
          renderItem={({ id, text, finished }, idx) => {
            const className = classNames({
              "list-item": true,
              "list-item__finished": finished
            });
            return (
              <List.Item className={className}>
                <div
                  onClick={() => onToggleFinished(id)}
                  className="list-item-wrap"
                >
                  <span className="list-item-text">{text}</span>
                  <Icon type="delete" onClick={() => onDelete(id)} />
                </div>
              </List.Item>
            );
          }}
        />
      )}
    </div>
  );
};

export default TodoList;
