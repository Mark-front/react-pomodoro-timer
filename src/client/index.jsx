import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from "../AppContainer";


window.addEventListener('load', () => {
  ReactDom.hydrate(<App />, document.getElementById('react__root'));
});