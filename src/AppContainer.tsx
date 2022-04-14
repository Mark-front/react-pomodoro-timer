import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ReactApp } from './App';
import { Provider } from 'react-redux';
import { rootReducer } from './store/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppContainer () {
  const [mounted, setMounted] = useState(false);
    
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <Provider store={store}>
      {mounted && (
      <BrowserRouter>
        <ReactApp/>
      </BrowserRouter>
      )}
    </Provider>
  );

}

export const App = hot(() => <AppContainer/>); 
