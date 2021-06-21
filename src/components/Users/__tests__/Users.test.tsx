import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import mockUser from './mockUser.json'
import { Users } from '../Users';

describe('Todo with mock data', () => {
  let originFetch: any;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });

  afterEach(() => {
    (global as any).fetch = originFetch;
  });

  it('should pass', async () => {
    const mRes = { json: jest.fn().mockResolvedValueOnce([mockUser]) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;

    const { getAllByTestId } = render(<Users />);

    const loader = screen.queryByTestId("loader");
    expect(loader).toBeInTheDocument();

    const users = await waitFor(() => getAllByTestId('user'));

    expect(screen.queryByTestId("loader")).toBeNull();

    expect(users).toHaveLength(1);
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});
