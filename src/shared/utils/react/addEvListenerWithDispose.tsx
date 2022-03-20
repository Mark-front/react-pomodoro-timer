import React from 'react';

interface IAddEvListenerWithDispose {
  element: HTMLAnchorElement;
  nameEvent: string;
  handler: any;
}

function addEventListenerWithDispose(props: IAddEvListenerWithDispose) {
  props.element.addEventListener(props.nameEvent, props.handler);
  return () => props.element.removeEventListener(props.nameEvent, props.handler);
}
