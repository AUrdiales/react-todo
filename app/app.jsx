import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom'
import Main from 'Main';

// Load foundation
import 'style-loader!css-loader!foundation-sites/dist/foundation.min.css';
$(document).foundation();

// App css
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/" component={Main}/>
           
         </div>
    </HashRouter>,
        document.getElementById('app')
    );
