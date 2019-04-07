import React, {Component} from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../iten-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

class App extends Component{

    maxId = 100;

    state = {
        todoData : [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Drink tea'),
            this.createTodoItem('Drink compote')
        ]
    }

    createTodoItem(label){
        return{
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    addItem_1 = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState((state) => {
            const {todoData} = this.state;
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        })
    };

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

    onToggleImportant =(id) => {
        this.setState((state) => {
            const {todoData} = state;
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};
            const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)];
            return{
                todoData: newArr
            }
        })
    };

    onToggleDone =(id) => {
        this.setState((state) => {
            const {todoData} = state;
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};
            const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)];
            return{
                todoData: newArr
            }
        })
    };

    render() {
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return(
            <div className="todo-app">
                <AppHeader done={doneCount} toDo={todoCount}/>
                <div className="top-panel d-flex mb-3">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos = {todoData}
                    onDeleted_1 = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}
                />

                <ItemAddForm addItem = {this.addItem_1}/>
            </div>
        )
    }
}
export default App;
