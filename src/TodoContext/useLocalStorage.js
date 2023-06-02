import { useEffect, useState } from 'react'

function useLocalStorage(itemName, initialValue) {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);
  
  useEffect(() => {
    setTimeout(() => {
      try{
        const localTodos = JSON.parse(localStorage.getItem(itemName));
        let parseTodos;
        if (!localTodos) {
          parseTodos = initialValue;
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          parseTodos = JSON.parse(localStorage.getItem(itemName));
          setItem(parseTodos);
        }
        setLoading(false);
      } catch(error) {
        setError(true);
      }  
    }, 2000);
  },[])
  
  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item, 
    saveItems, 
    error, 
    loading
  };
}

export {useLocalStorage};