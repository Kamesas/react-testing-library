import React, { FC } from "react";
import { useLoadTodoList } from "./useLoadTodoList";

interface iTodosProps {
  [key: string]: any;
}

export const Todos: FC<iTodosProps> = () => {
  const { todos } = useLoadTodoList();

  return (
    <div className="Todos" data-testid="todos">
      <h1>Todos</h1>

      {Array.isArray(todos) &&
        todos.length > 0 &&
        todos.slice(0, 10).map((todo, i) => {
          return (
            <div key={i} data-testid="todo">
              {todo.title}
            </div>
          );
        })}
    </div>
  );
};
