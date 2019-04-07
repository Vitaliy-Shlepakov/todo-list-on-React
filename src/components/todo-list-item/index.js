import React, {Component} from 'react';
import './todo-list-item.css';

class TodoListItem extends Component{

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    };

    onMarkImportant = () => {
        this.setState( (state) => {
            return {
                important: !state.important
            }
        })
    }

    render(){

        const {label, onDeleted} = this.props;
        const {done, important} = this.state;

        let className = !done ? 'todo-list-item' : 'todo-list-item done';
        className = important ? className += ' important' : className;

        return (
            <span className={className}>
                 <span
                     className = "todo-list-item-label"
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <div className="btn-wrapper">
                    <button
                        className = "btn btn-outline-success btn-sm"
                        onClick={this.onMarkImportant}>
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
