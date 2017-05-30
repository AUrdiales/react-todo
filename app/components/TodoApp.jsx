import React, {Component} from 'react';
import TodoList from 'TodoList';


class TodoApp extends Component{
    constructor(props) {
        super(props)
        this.state = 
        {todos:  [
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
                ]};
    }
    render() {
        var {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
}
module.exports = TodoApp;
