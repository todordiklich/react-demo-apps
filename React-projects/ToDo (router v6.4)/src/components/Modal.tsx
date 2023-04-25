import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

export default function Modal({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  function closeModalHandler() {
    navigate('..');
  }

  return createPortal(
    <>
      <div id="backdrop" onClick={closeModalHandler} />
      <dialog className="modal" open>
        {children}
      </dialog>
    </>,
    document.getElementById('modal') as HTMLElement
  );
}
