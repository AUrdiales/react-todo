import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom'

import TodoApp from 'TodoApp';
import actions from 'actions';
var store = require('configureStore').configure();
import TodoAPI from 'TodoAPI';

store.subscribe(() => {
    var state = store.getState();
    console.log('New State', state);
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
import 'style-loader!css-loader!foundation-sites/dist/foundation.min.css';
$(document).foundation();

// App css
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
        <div>
            <Route path="/" component={TodoApp}/>
           
         </div>
    </HashRouter>
    </Provider>,
        document.getElementById('app')
    );
