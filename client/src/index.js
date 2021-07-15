import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import reduxThunk from 'redux-thunk';
//import requireAuth from './requireAuth'
//import Auth from './RequireAuthHooks'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


// initializing redux store
// requires a reducer. Second argument is for redux dev-tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={App}/>
      </Switch>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);


