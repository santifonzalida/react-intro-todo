import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { Modal } from '../modal';
import { NewTodoModal } from '../modal/NewTodoModal'

function AppUI () {
    const { 
        searchedTodos,
        loading,
        error,
        openModal,
        } = useContext(TodoContext);

    return(
        <>
            <TodoCounter/>
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <p>Agrega un nuevo TODO!</p> }
                {searchedTodos.map(todos => (
                    <TodoItem 
                        key = {todos.text} 
                        text = {todos.text} 
                        completed = {todos.completed}
                    />
                    ))
                }
            </TodoList>
            <CreateTodoButton />
            { openModal && (
                <Modal>
                    <NewTodoModal />
                </Modal>
            )}
        </>
    )
}

export { AppUI };