import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '../Modal';

it('modal handler', () => {
  render(<Modal />)

  const btnShowModal = screen.getByTestId("modalHandler-btn");
  expect(btnShowModal).toBeInTheDocument();
  expect(screen.queryByTestId("modal")).toBeNull();
  
  userEvent.click(btnShowModal)
  
  expect(screen.getByTestId("modal")).toBeInTheDocument();
})