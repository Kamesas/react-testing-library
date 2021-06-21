import React, { FC } from "react";
import { useModal } from "../../useModal";

interface iModalProps {
  [key: string]: any;
}

export const Modal: FC<iModalProps> = () => {
  const { modal, setModal } = useModal();

  return (
    <div className="Modal" data-testid="modal-wrap">
      <button onClick={() => setModal(!modal)} data-testid="modalHandler-btn">
        {modal ? "close modal" : "open Modal"}
      </button>

      {modal && <div data-testid="modal">Modal</div>}
    </div>
  );
};
