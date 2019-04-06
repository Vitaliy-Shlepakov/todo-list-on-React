import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from'./components/search-panel';

const todoData = [
    {label: 'Drink cofee', important: false},
    {label: 'Drink tea', important: true},
    {label: 'Drink compote', important: false}
]

const App = () => {
    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos = {todoData}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
