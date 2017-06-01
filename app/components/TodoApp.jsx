import React, {Component} from 'react';
import uuid from 'node-uuid';
import TodoList from 'TodoList';
import AddForm from 'AddForm';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component{
    constructor(props) {
        super(props)
        this.state = 
        {showCompleted: false,
            searchText: '',
            todos:  [
            {
                id: uuid(), 
                text:'Clean bathroom',
                completed: false
            },
            {   id: uuid(),
                 text: 'Walk the dog',
                 completed: true
                },
                {
                id: uuid(),
                text: 'Learn React!',
                completed: true
            },
            {
                id: uuid(),
                text: 'Learn flux!',
                completed: false
            }
                ]
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
        var {todos} = this.state;
        return(
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    <TodoSearch onSearch={this.handleSearch} />
                    <TodoList todos={todos} onToggle={this.handleToggle}/>
                    <AddForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
}
module.exports = TodoApp;
