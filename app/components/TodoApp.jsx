import React, {Component} from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddForm from 'AddForm';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component{
    constructor(props) {
        super(props)
       
    }
    render() {
        return(
            <div>
                <h1 className="page-title">Todo App</h1>
            
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
module.exports = TodoApp;
