import React, { useReducer, useState } from 'react';
import "./todo.css";


const TODO_STATUS = {
    TODO: 'TODO',
    COMPLETED: 'COMPLETED',
};


const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: Date.now(), text: action.payload, status: TODO_STATUS.TODO }];
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

export const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            dispatch({ type: 'ADD', payload: newTodo });
            setNewTodo('');
        }
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: 'REMOVE', payload: id });
    };

    return (
        <div className='container' style={{display:'flex', justifyContent:'center'}}>
            <div className='todoContent'>
                <h1>Todo List</h1>
                <div>
                    <input
                        type="text"
                        placeholder='New Todo...'
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button className='todoButton' onClick={handleAddTodo}>Add Todo</button>
                </div>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.status === TODO_STATUS.COMPLETED ? 'line-through' : 'none' }}>
                                {todo.text}
                            </span>
                            <button className='todoX' onClick={() => handleRemoveTodo(todo.id)}>❌</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

