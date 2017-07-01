import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {todos, showCompleted, searchText} = this.props;
        if(todos.length === 0) {
            return(
                <p className="container__message">Nothing to do</p>
            );
        } else {
        var renderTodos = () => {
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                <Todo key={todo.id} {...todo}/>
                
                );
            });
        }
        }
        return(
            <div>
                {renderTodos()}
            </div>
        )
    }
}

module.exports = connect(
    (state) => {
        return state;
    }
)(TodoList);