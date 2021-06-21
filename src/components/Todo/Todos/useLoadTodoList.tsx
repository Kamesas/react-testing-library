import { useEffect, useState } from 'react'

interface iTodo {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

export const useLoadTodoList = () => {
  const [todos, setTodos] = useState<Array<iTodo> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = async () => {

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
      setLoading(false);
    } catch (error) {
      console.log("todos err", error);
      setLoading(false);
    }
  }


  return {todos, loading};
}