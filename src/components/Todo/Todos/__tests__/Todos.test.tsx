import { render, waitFor } from '@testing-library/react';
import { Todos } from '../Todos';
import mockTodos from './mockTodo.json';

describe('Todo with mock data', () => {
  let originFetch: any;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });

  afterEach(() => {
    (global as any).fetch = originFetch;
  });

  it('should pass', async () => {
    const mRes = { json: jest.fn().mockResolvedValueOnce([mockTodos]) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;

    const { getAllByTestId } = render(<Todos />);

    // const loader = screen.queryByTestId("loader");
    // expect(loader).toBeInTheDocument();

    const div = await waitFor(() => getAllByTestId('todo'));

    // expect(screen.queryByTestId("loader")).toBeNull();

    expect(div).toHaveLength(1);
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});