import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import mockTodos from './components/Todo/Todos/__tests__/mockTodo.json'
import mockUser from './components/Users/__tests__/mockUser.json'
import axios from 'axios';

jest.mock('axios');

describe('Todo with mock data', () => {
  it('should pass', async () => {
    // @ts-ignore
    const getUsers = await axios.get.mockImplementationOnce(() =>
      Promise.resolve({data: [mockUser, {...mockUser, id: 565}]}));
    // @ts-ignore
    const getTodo = await axios.get.mockImplementationOnce(() =>
      Promise.resolve({data: [mockTodos, {...mockTodos, id: 979}, {...mockTodos, id: 555}]}));
    const {getAllByTestId} = render(<App />);

    expect(screen.getByTestId("app")).toBeInTheDocument();
    // expect(screen.getByTestId("user-with-axios-loader")).toBeInTheDocument();
    expect(screen.getByTestId("todo-with-axios-loader")).toBeInTheDocument();
    expect(screen.queryByTestId("users")).toBeNull();
    expect(screen.queryByTestId("todos")).toBeNull();

    const userList = await waitFor(() => getAllByTestId('users-with-axios-item'));
    expect(userList).toHaveLength(2);
    expect(screen.queryByTestId("users-with-axios")).toBeInTheDocument();
    expect(getUsers)
    .toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users");

    const todoList = await waitFor(() => getAllByTestId('todo'));
    expect(screen.queryByTestId("todo-with-axios-loader")).toBeNull();
    expect(screen.queryByTestId("todos")).toBeInTheDocument();
    expect(todoList).toHaveLength(3);
    expect(getTodo).toBeCalledTimes(1);
    expect(getTodo)
    .toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos");
  });
});
