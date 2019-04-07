import React, {Component} from 'react';
import './todo-list-item.css';

class TodoListItem extends Component{

    render(){

        const {label, onDeleted, done, important, onToggleImportant, onToggleDone} = this.props;

        let className = !done ? 'todo-list-item' : 'todo-list-item done';
        className = important ? className += ' important' : className;

        return (
            <span className={className}>
                 <span
                     className = "todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>
                <div className="btn-wrapper">
                    <button
                        className = "btn btn-outline-success btn-sm"
                        onClick={onToggleImportant}>
                        <i className="fa fa-exclamation"></i>
                    </button>
                    <button
                        className = "btn btn-outline-danger btn-sm"
                        onClick={onDeleted}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </span>

        )
    }
}

export default TodoListItem;
