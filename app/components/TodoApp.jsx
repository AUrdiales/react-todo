import React, {Component} from 'react';
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
                id: 1, 
                text:'Clean bathroom'
            },
            {   id: 2,
                 text: 'Walk the dog'
                },
                {
                id: 3,
                text: 'Learn React!'
            },
            {
                id:4,
                text: 'Learn flux!'
            }
                ]
            };
    }
    handleAddTodo = (text) => {
        alert('new todo:' + text);
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
                <TodoSearch onSearch={this.handleSearch}/>
                <div className="column small-centered medium-6 large-4">
                    <TodoList todos={todos}/>
                    <AddForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
}
module.exports = TodoApp;
