import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo({});

    return (
        <>
            <h1>TodoApp ({todosCount}) <small> pendientes: {pendingTodosCount}</small></h1>
            <hr></hr>

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}></TodoList>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr></hr>
                    <TodoForm onNewTodo={handleNewTodo} ></TodoForm>
                </div>
            </div>


        </>
    )
}
