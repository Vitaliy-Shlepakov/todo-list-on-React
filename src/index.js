import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from'./components/search-panel';

const todoData = [
    {label: 'Drink cofee', important: false, id: 0},
    {label: 'Drink tea', important: true, id: 1},
    {label: 'Drink compote', important: false, id: 2}
]

const App = () => {
    return(
        <div className="container">
            <AppHeader done={1} toDo={1}/>
            <SearchPanel/>
            <TodoList todos = {todoData}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
