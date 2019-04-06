import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'red' : 'black'
    };
        return (
        <span style={style}
              className = "todo-list-item-label">
            {label}
        </span>

        // <button type="button" className="btn btn-outline-success btn-sm">Done</button>
    )
};
export default TodoListItem;
