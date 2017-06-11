import uuid from 'uuid';
import moment from 'moment';


export function searchTextReducer(state = '', action) {

        switch(action.type) {
            case 'SET_SEARCH_TEXT':
            return action.searchText;
            default:
            return state;
        };
};

export function showCompletedReducer(state = false, action){

    switch(action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
        return !state;
        default:
        return state;
    };
};

export function todosReducer(state = [], action) {
    
    switch(action.type) {
        case 'ADD_TODO':
        return [
            ...state,
            {
                id: uuid(),
                text: action.text,
                createdAt: moment().unix(),
                completedAt: undefined
            }
            
        ];
        case 'TOGGLE_TODO':
        return state.map((todo) => {
            if(todo.id === action.id){
                var nextCompleted = !todo.completed;
                var nextCompletedAt = nextCompleted ? moment().unix() : undefined;
                return {
                    ...todo,
                    completed: nextCompleted,
                    completedAt: nextCompletedAt
                }
            }
        });
        
        default:
        return state;
    };
};