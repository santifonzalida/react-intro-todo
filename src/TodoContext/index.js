import {createContext, useState} from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider({children}) {

    const [textSearch, setTextSearch] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [newTodoText, setNewTodoText] = useState('');
    const {
        item: todos,
        saveItems: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []); 
    

    const getTotalTodos = () => {
        return todos.length;
    }

    const getCompletedTodos = () => {
        return todos.filter(todo => todo.completed).length;
    }

    const searchedTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(textSearch.toLowerCase());
    });

    const onClickDone = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const addTodo = () => {
        const newTodos = [...todos];
        let todo = { text: newTodoText, completed: false };
        newTodos.push(todo);
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            getTotalTodos, 
            getCompletedTodos, 
            setTextSearch, 
            onClickDone, 
            deleteTodo, 
            searchedTodos,
            loading,
            error,
            openModal,
            setOpenModal,
            newTodoText, 
            setNewTodoText,
            addTodo,
        }} >
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};