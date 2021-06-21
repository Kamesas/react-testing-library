import React from 'react';
import { TodosWithAxios } from './components/Todo/Todos/TodosWithAxios';
import { UsersWithAxios } from './components/Users/UsersWithAxios';

function App() {
  return (
    <div className="App" data-testid='app'>
      <h1>User's list</h1>
      <UsersWithAxios />
      <h2>Todo's list</h2>
      <TodosWithAxios />
    </div>
  );
}

export default App;
