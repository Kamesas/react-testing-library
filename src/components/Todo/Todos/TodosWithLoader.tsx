import React, { FC } from "react";
import { useLoadTodoList } from "./useLoadTodoList";

interface iTodosProps {
  [key: string]: any;
}

export const TodosWithLoader: FC<iTodosProps> = () => {
  const { todos, loading } = useLoadTodoList();

  if (loading) return <div data-testid="loader">Loading</div>;

  return (
    <div className="Todos" data-testid="todos">
      <h1>Todos with loader</h1>
      
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
