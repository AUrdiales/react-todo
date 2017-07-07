import moment from 'moment';

import {firebaseRef, githubProvider } from 'app/firebase/index';
import firebase from 'firebase';

var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};

var startUpdateTodo = (id, completed) => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
};


var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        var todoRef = firebaseRef.child('todos').push(todo);

       return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};

var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
}

var startAddTodos = () => {
    return (dispatch, getState) => {
        var todosRef = firebaseRef.child('todos');

        todosRef.once('value').then((snapshot) => {
            var todos = snapshot.val() || {};
            var parsedTodos = [];

            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });
            dispatch(addTodos(parsedTodos));
        });
        
    };
};

 var startLogin = () => {
     return (dispatch, getState) => {
       return  firebase.auth().signInWithPopup(githubProvider).then((result)=>{
            console.log('auth Worked',result);
        }, (e) => {
            console.log('unable to login',e);
        });
     }
 };

 var startLogout = () => {
     return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('logOut');
         }, (e) => {
            console.log('unable to log out', e);
         });
     }
 }

module.exports = {
    addTodo,
    toggleShowCompleted,
    updateTodo,
    startUpdateTodo,
    setSearchText,
    addTodos,
    startAddTodos,
    startAddTodo,
    startLogin,
    startLogout
};