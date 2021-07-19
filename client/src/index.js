import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/reducer';
import reduxThunk from 'redux-thunk'
import BaseLayout from './Component/BaseLayout'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
        <BrowserRouter>
          <BaseLayout>
            <App />
          </BaseLayout>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);