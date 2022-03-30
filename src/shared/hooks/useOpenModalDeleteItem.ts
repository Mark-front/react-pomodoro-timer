import React, { useEffect} from "react";

interface IUseModalOpen {
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
}

export function useModalOpen({onClose, modalRef}: IUseModalOpen) {
  const ref = modalRef;
    useEffect(() => {
      function handleClick(event: MouseEvent) {
        if (event.target instanceof Node && !ref.current?.contains(event.target)) {
          onClose?.();
        }
      }
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      }
    }, []);
}
