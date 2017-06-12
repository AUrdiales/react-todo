import {combineReducers,compose, createStore, } from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export function configure(initialState = {}) {
    var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompletedReducer: showCompletedReducer,
    todos: todosReducer
   
});

    var store = createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};