import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom'

import TodoApp from 'TodoApp';
import actions from 'actions';
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

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
