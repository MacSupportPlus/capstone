import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './Reducers'
import BaseLayout from './Component/BaseLayout'
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <BaseLayout>
        <App />
        </BaseLayout>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);