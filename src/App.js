import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { withAuthentication } from './components/Session';
import Homescreen from './components/homescreen'
import SignIn from './components/signIn'
import SignUp from './components/signup'
import Contact from './components/contact'
import Package from './components/settings/package'

const App = () => (
  
    <BrowserRouter>
      <div className="App">
            <Route exact path = '/' component={Homescreen} />
            <Route exact path = '/uyeol' component={SignUp} />
            <Route exact path = '/girisyap' component={SignIn} />
            <Route exact path = '/iletisim' component={Contact} />
            <Route exact path = '/paketim' component={Package} />
      </div>
    </BrowserRouter>

)
  
export default withAuthentication(App)