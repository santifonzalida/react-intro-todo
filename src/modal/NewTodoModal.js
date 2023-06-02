import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function NewTodoModal() {

    const { setOpenModal, newTodoText, setNewTodoText, addTodo } = useContext(TodoContext); 

    const closeModal = () => {
        setOpenModal(false)
    }

    const saveTodo = () => {
        if(newTodoText.length === 0) return;
        addTodo();
        setOpenModal(false);
    }

    return (
        <div className="modal-content">
            <p>Type the new Todo!</p>
            <div className='todo-text-box'>
                <input type='text' value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} autoFocus/>
            </div>
            <div className="footer-button">
                <button onClick={closeModal}> Cancel </button>
                <button onClick={saveTodo}> Save </button>
            </div>
        </div>
    )
}

export { NewTodoModal};