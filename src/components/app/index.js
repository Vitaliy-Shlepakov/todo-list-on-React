import React, {Component} from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../iten-status-filter';

import './app.css';

class App extends Component{

    state = {
        todoData : [
            {label: 'Drink cofee', important: false, id: 0},
            {label: 'Drink tea', important: true, id: 1},
            {label: 'Drink compote', important: false, id: 2}
        ]
    }

    deleteItem = (id) => {
        this.setState((state) => {
            const {todoData} = state;
            const idx = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArr = [...before, ...after];

            return {
                todoData: newArr
            }
        })
    };

    render() {
        const {todoData} = this.state;
        return(
            <div className="todo-app">
                <AppHeader done={1} toDo={1}/>
                <div className="top-panel d-flex mb-3">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos = {todoData}
                    onDeleted_1 = {this.deleteItem}/>
            </div>
        )
    }
}
export default App;
