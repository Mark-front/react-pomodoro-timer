import React, { useRef } from 'react';
import { Button } from '../Button';
import { useModalOpen } from '../hooks/useOpenModalDeleteItem';
import styles from './modaldeleteitem.css';
import { ButtonCloseModal } from './ButtonCloseModal/ButtonCloseModal';
import { Indent } from '../Indent/Indent';
import { createPortal } from 'react-dom';
 
interface IModalDeleteItemProps {
  onDelete: () => void;
  onClose: () => void;
}

export function ModalDeleteItem({onClose, onDelete}: IModalDeleteItemProps) {
  const modalRef = useRef<HTMLDivElement>(null);//ссылка на dom модалки
  if (onClose !== undefined) {
    useModalOpen({onClose, modalRef})//открывает и закрывает модалку
  }

  const node = document.querySelector('#modal__root');//контейнер модалки
  if (!node) return null;

  return createPortal((
    <div ref={modalRef} className={styles.modalContainer}>
      <div className={styles.modal}>
        <ButtonCloseModal onClose={onClose}/>
        <h4 className={styles.header}>Удалить задачу?</h4>
        <Button onClick={onDelete} type={'button'} color={'red'} children={"Удалить"}></Button>
        <Indent indent={'bottom'} size={10} />
        <button onClick={onClose} className={styles.cancel}>Отмена</button>
      </div>
    </div>
  ), node);

}
