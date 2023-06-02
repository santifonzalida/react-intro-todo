import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){

    const {getCompletedTodos, getTotalTodos} = useContext(TodoContext)

    return (
        <h3 className='TodoCounter'> Has completado {getCompletedTodos()} de {getTotalTodos()} TODOS</h3>
    );
}

export { TodoCounter };