import { useContext } from 'react';

import './CreateTodoButton.css';

import { TodoContext } from '../TodoContext'

function CreateTodoButton() {

    const { openModal, setOpenModal, setNewTodoText } = useContext(TodoContext);

    const onClickButtonAdd =() => {
        setNewTodoText('')
        setOpenModal(!openModal);
    }

    return (
        <button className='CreateTodoButton' onClick={onClickButtonAdd}>+</button>
    )
}

export { CreateTodoButton };