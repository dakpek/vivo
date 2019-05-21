import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

//components-------------------------------
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
import How from './components/web/how'
//------------------------------

//redux, rrfirebase --------------------
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//------------------------------------

//firebase----------------------------
import firebase from 'firebase/app'
import  'firebase/auth'
import  'firebase/database'
//------------------------------------



const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
}

// Initialize firebase instance
firebase.initializeApp(config)


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), 
)(createStore)

const initialState = {}


const store = createStoreWithFirebase(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(
    thunk
  )
)
)


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
            <Route exact path = '/' component={LandingPage} />
            <Route exact path = '/paketsec' component={Products} />
            <Route exact path = '/nasil' component={How} />
            {/* <Route exact path = '/uyeol' component={SignUp} />
            <Route exact path = '/girisyap' component={SignIn} />
            <Route exact path = '/iletisim' component={Contact} />
            <Route exact path = '/paketim' component={Package} />
            <Route exact path = '/bilgilerim' component={Profile} />
            <Route exact path = '/iptal' component={Cancellation} />
            <Route exact path = '/bye' component={Bye} /> */}
      </div>
    </BrowserRouter>
  </Provider>

)
  
export default App