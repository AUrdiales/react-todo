import React, {Component} from 'react';
import * as Redux from 'react-redux';

import actions from 'actions';
import TodoList from 'TodoList';
import AddForm from 'AddForm';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component{
    constructor(props) {
        super(props)
       
    }
    onLogOut = (e) => {
        var {dispatch} = this.props;
        e.preventDefault();

        dispatch(actions.startLogout());
    }
    render() {
        return(
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogOut}>Logout</a>
                </div>
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

export default Redux.connect()(TodoApp);
