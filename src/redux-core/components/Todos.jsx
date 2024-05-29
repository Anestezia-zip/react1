import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../actions/dataActions';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.data.todos);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
                dispatch(dataActions.setTodos(res.data));
            } catch (error) {
                console.error(error)
            }
        }
        getTodos()
    }, [])


  return (
    <div style={{backgroundColor: 'lightgoldenrodyellow'}}>
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos