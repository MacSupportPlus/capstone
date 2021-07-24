import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Experiences} from './Component/Experiences';
import {SurvivingBootcamp} from './Component/SurvivingBootcamp';
import {LandingPage} from './Component/LandingPage';
import {Courses} from './Component/Courses';
import Login from './Component/login/Login.js';
import Register from './Component/register/Register.js';
import Signout from './Component/Signout'
import Auth from './RequireAuth';
import Cart from './Component/Cart'

// import styles from './styles.module.css';
export const App = () => {
  return (
    <div className=''>
        <Switch>
        <Route exact path="/" render={()=>(
              <Auth>
                <LandingPage/>
              </Auth>
        )} />
         
         <Route exact path="/surviving" render={()=>(
              <Auth>
                <SurvivingBootcamp/>
              </Auth>
        )} />
          <Route exact path="/experiences" render={()=>(
              <Auth>
                <Experiences/>
              </Auth>
        )} />
          <Route exact path="/courses" render={()=>(
              <Auth>
                <Courses/>
              </Auth>
        )} />
          <Route exact path="/cart" render={()=>(
              <Auth>
                <Cart/>
              </Auth>
        )} />
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route exact path="/signout" render={()=>(
              <Auth>
                <Signout/>
              </Auth>
        )} />
        </Switch>
    </div>
  );
}