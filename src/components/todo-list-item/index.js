import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'red' : 'black'
    };
        return (
            <span className="todo-list-item">
                 <span style={style}
                       className = "todo-list-item-label">
                {label}
                </span>
                <div className="btn-wrapper">
                    <button className = "btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation"></i>
                    </button>
                    <button className = "btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </span>

    )
};
export default TodoListItem;
