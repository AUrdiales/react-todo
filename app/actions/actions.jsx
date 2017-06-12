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

var addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
}; 

var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
}

module.exports = {
    addTodo,
    toggleShowCompleted,
    toggleTodo,
    setSearchText,
    addTodos
};