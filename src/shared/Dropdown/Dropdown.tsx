import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
  top: number;
  left: number;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ top, left, children, isOpen=false, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  let node;
  if (typeof window !== 'undefined') {
    node = window.document.querySelector('#dropdown__root');
  }
  if (!node) return null;

  return ReactDOM.createPortal(
    isOpen && (
      <div style={{top: `${top}px`, left: `${left}px`}} onClick={onClose} className={styles.container}>
        {children}
      </div>
    )
  , node);
}

