import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';


function TodoSearch () {
    const {setTextSearch} = useContext(TodoContext);

    return (
        <div className='searchContainer'>
            <input className="TodoSearch" type="text" placeholder="Buscar todos" 
                onChange={(e) => setTextSearch(e.target.value) } />
        </div>
    )
}

export { TodoSearch };