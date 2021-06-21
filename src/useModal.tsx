import { useState } from 'react'

export const useModal = () => {
  const [modal, setModal] = useState(false);

  return {modal, setModal};
}