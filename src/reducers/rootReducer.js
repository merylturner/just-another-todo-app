import { todos } from './todosReducer';
import { visibilityFilter } from './visibilityFilterReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    todos,
    visibilityFilter
});