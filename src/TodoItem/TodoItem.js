import { BsFillCalendarCheckFill, BsClipboard2X } from 'react-icons/bs'
import './TodoItem.css';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function TodoItem({text, completed}){

    const { onClickDone, deleteTodo} = useContext(TodoContext);

    return(
        <li className='TodoItem'>
            <span className={`button_done ${completed && "todoDone"} `} onClick={() => (onClickDone(text))}> <BsFillCalendarCheckFill /> </span>
            <p className={`${completed && "TodoItem-p--complete"}`}>{text}</p>
            <span className='button_not_done' onClick={() => deleteTodo(text)}><BsClipboard2X/></span>
        </li>
    )
}

export { TodoItem };