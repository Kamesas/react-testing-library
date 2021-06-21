import { useEffect, useState } from 'react'
import axios from 'axios';

interface iTodo {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

export const useLoadTodoListWithAxios = () => {
  const [todos, setTodos] = useState<Array<iTodo> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = async () => {

    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(data);
      setLoading(false);
    } catch (error) {
      console.log("todos err", error);
      setLoading(false);
    }
  }


  return {todos, loading};
}