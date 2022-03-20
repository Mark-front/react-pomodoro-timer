import React from 'react';
import styles from './indent.css';
import classNames from 'classnames';

interface IIndentProps{
  indent: "left" | "right" | "top" | "bottom";
  size: number;
}

export function Indent(
  {
    indent,
    size
  } : IIndentProps
  ) {
  let classes = classNames(
    styles.indent, 
  )

  let margin:string;

  switch(indent) {
    case("left") : {
      margin = `0 0 0 ${size}px`;
      break;
    };
    case("right") : {
      margin = `0 ${size}px 0 0 `;
      break;
    };
    case("bottom") : {
      margin = `0 0 ${size}px 0`;
      break;
    };
    case("top") : {
      margin = `${size}px 0 0 0`;
      break;
    };
  }



  return (
    <span style={{margin: `${margin}`}} className={classes}></span>
  );
}
