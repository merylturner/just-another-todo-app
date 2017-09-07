import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo.actions';

export const AddTodo = ({ dispatch }) => {
    let input;
    
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                {/* if(!input.value.trim()){
                    return;
                } */}

                //SOMETHING WRONG WITH DISPATCH HERE???
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                <input ref={node => input = node}/>
                <button type="submit">Add Todo </button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);


