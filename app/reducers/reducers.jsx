export function searchTextReducer(state = '', action) {

        switch(action.type) {
            case 'SET_TEXT_SEARCH':
            return action.searchText;
            default:
            return state
        };
};

export function showCompletedReducer(state = false, action){

    switch(action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
        return !state
        default:
        return state
    };
};