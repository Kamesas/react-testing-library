import React, { FC } from "react";
import { useLoadTodoListWithAxios } from "./useLoadTodoListWIthAxios";

interface iTodosProps {
  [key: string]: any;
}

export const TodosWithAxios: FC<iTodosProps> = () => {
  const { todos, loading} = useLoadTodoListWithAxios();

  if(loading) return <div data-testid='todo-with-axios-loader'>Loading </div>
  return (
    <div className="Todos" data-testid="todos">
      <h1>Todos</h1>

      {Array.isArray(todos) &&
        todos.length > 0 &&
        todos.slice(0, 10).map((todo) => {
          return (
            <div key={todo.id} data-testid="todo">
              {todo.title}
            </div>
          );
        })}
    </div>
  );
};
