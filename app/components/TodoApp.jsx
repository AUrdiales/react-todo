import React, {Component} from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddForm from 'AddForm';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

class TodoApp extends Component{
    constructor(props) {
        super(props)
        this.state = 
        {showCompleted: false,
            searchText: '',
            todos:  TodoAPI.getTodos()
            };
    }
    handleToggle = (id) => {
       var updatedTodos = this.state.todos.map((todo) => {
           if(todo.id === id){
            todo.completed = !todo.completed
           }
           this.setState({
                todo: updatedTodos
            })
        return todo;
       });
    }
    componentDidUpdate = () => {
        TodoAPI.setTodos(this.state.todos); 
    }
    handleAddTodo = (text) => {
        this.setState({
            todos: [
                ...this.state.todos,
                 {
                     id: uuid(),
                     text: text,
                     completed: false
                 }
                 ]
        });
    }
    handleSearch = (showCompleted, searchText) => {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
    render() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return(
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    <TodoSearch onSearch={this.handleSearch} />
                    <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                    <AddForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
}
module.exports = TodoApp;
