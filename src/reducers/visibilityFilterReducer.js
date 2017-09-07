import * as actions from '../constants/todo.constants';

export const visibilityFilter = (state = 'SHOW ALL', {type, filter }) => {
    switch(type) {
    case actions.SET_VISIBILITY_FILTER:
        return filter;
    default:
        return state;
    }
};