import * as actions from '../constants/todo.constants';

let nextId = 0;
export function addTodo(todo){
    return {
        type: actions.ADD_TODO,
        payload: todo,
        id: nextId++
    };
}

export function setVisibilityFilter(filter){
    return {
        type: actions.SET_VISIBILITY_FILTER,
        payload: filter
    };
}

export function toggleTodo(id){
    return {
        type: actions.TOGGLE_TODO,
        id
    };
}