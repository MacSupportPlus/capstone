import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Experiences} from './Component/Experiences';
import {SurvivingBootcamp} from './Component/SurvivingBootcamp';
import {LandingPage} from './Component/LandingPage';
import {Courses} from './Component/Courses';
import Login from './Component/login/Login.js';
import Register from './Component/register/Register.js';
import Signout from './Component/Signout'


// import styles from './styles.module.css';
export const App = () => {
  return (
    <div className=''>
        <Switch>
          <Route exact path='/'> 
            <LandingPage />
          </Route>
          <Route path='/surviving'>
            <SurvivingBootcamp />
          </Route>
          <Route path='/experiences'>
            <Experiences />
          </Route>
          <Route path='/courses'>
            <Courses />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/signout'>
            <Signout />
          </Route>
        </Switch>
    </div>
  );
}