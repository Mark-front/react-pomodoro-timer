import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { GetStartedContainer } from './shared/GetStartedContainer/GetStartedContainer';
import { Timer } from './shared/Timer/Timer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './store/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function ReactApp() {
  return(
    <Provider store={store}>
      <Header/> 
      <Content>
        <GetStartedContainer/>
        <Timer/>
      </Content>
    </Provider>
  );
}

export const App = hot(ReactApp); 
