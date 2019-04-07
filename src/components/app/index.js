import React from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../iten-status-filter';

import './app.css';

const App = () => {
    const todoData = [
        {label: 'Drink cofee', important: false, id: 0},
        {label: 'Drink tea', important: true, id: 1},
        {label: 'Drink compote', important: false, id: 2}
    ]
    return(
        <div className="todo-app">
            <AppHeader done={1} toDo={1}/>
            <div className="top-panel d-flex mb-3">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos = {todoData}/>
        </div>
    )
}
export default App;
