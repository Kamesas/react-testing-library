import { render, screen, waitFor } from '@testing-library/react';
import { TodosWithAxios } from '../TodosWithAxios';
import mockTodos from './mockTodo.json';
import axios from 'axios'; 

jest.mock('axios');
const mockTodosArr = [
  mockTodos,
]


describe('Todo with mock data', () => {
  it('should pass', async () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() => Promise.resolve({data: mockTodosArr}));

    const { getAllByTestId } = render(<TodosWithAxios />);

    expect(screen.queryByTestId("todo-with-axios-loader")).toBeInTheDocument();

    const div = await waitFor(() => getAllByTestId('todo'));

    expect(screen.queryByTestId("todo-with-axios-loader")).toBeNull();

    expect(div).toHaveLength(1);
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get)
      .toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos");
  });
});