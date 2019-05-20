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
import Profile from './components/settings/profile'
import Cancellation from './components/cancellation'
import Bye from './components/cancellation/bye/'
import LandingPage from './components/web/landingPage'
import Products from './components/web/products'

const App = () => (
  
    <BrowserRouter>
      <div className="App">
            <Route exact path = '/' component={LandingPage} />
            <Route exact path = '/paketsec' component={Products} />
            <Route exact path = '/uyeol' component={SignUp} />
            <Route exact path = '/girisyap' component={SignIn} />
            <Route exact path = '/iletisim' component={Contact} />
            <Route exact path = '/paketim' component={Package} />
            <Route exact path = '/bilgilerim' component={Profile} />
            <Route exact path = '/iptal' component={Cancellation} />
            <Route exact path = '/bye' component={Bye} />
      </div>
    </BrowserRouter>

)
  
export default withAuthentication(App)