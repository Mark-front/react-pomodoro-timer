import React, { useState } from 'react';
import styles from './hovermousecircle.css';

interface IHoverMouseCircleProps {
  children: React.ReactNode;
} 

export function HoverMouseCircle({children}: IHoverMouseCircleProps) {
  const [hovered, setHover] = useState(false);

  function handleMouseEvent(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("Hover")
  }

  return (
    <button onMouseDown={handleMouseEvent} onMouseOut={handleMouseEvent}>
      {children}
    </button>
  );
}
