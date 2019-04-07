import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todos, onDeleted_1, onToggleImportant, onToggleDone}) => {

    const elements = todos.map( (item) => {
        return(
            <li key={item.id} className={"list-group-item"}>
                <TodoListItem
                    label = {item.label}
                    important = {item.important}
                    onDeleted ={() => onDeleted_1(item.id)}
                    onToggleImportant = {() => onToggleImportant(item.id)}
                    onToggleDone = {() => onToggleDone(item.id)}
                    done = {item.done}
                    important={item.important}
                />
            </li>
        )
    })

    return(
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;
