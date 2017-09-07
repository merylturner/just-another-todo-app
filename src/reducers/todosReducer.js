import * as actions from '../constants/todo.constants';

export const todos = (state = [], { type, payload, id }) => {
    switch (type) {
    case actions.ADD_TODO:
        return [...state, {
            id: id,
            payload: payload,
            completed: false
        }];
    case actions.TOGGLE_TODO:
        return state.map(todo => 
            (todo.id === id) 
                ? { ...todo, completed: !todo.completed}
                : todo
        );
    default:
        return state;
    }
};