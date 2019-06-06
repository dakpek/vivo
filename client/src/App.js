import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

//components-------------------------------
// import Homescreen from './components/homescreen'
import SignIn from './components/web/signIn'
// import SignUp from './components/signup'
// import Contact from './components/contact'
// import Package from './components/settings/package'
// import Profile from './components/settings/profile'
// import Cancellation from './components/cancellation'
// import Bye from './components/cancellation/bye/'
import LandingPage from './components/web/landingPage'
import Products from './components/web/products'
import How from './components/web/how'
import Checkout from './components/web/checkout'
import Homepage from './components/web/homepage'
import Payment from './components/web/payment'
import Charity from './components/web/charity'
import Item from './components/simpleComponents/item'
// import Review from './components/web/reviews';
//------------------------------

//redux, rrfirebase --------------------
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import { createStore,  compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from  'redux-persist/lib/stateReconciler/autoMergeLevel2';

//------------------------------------


const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel2
}

const persistR = persistReducer(persistConfig, rootReducer)


const store = createStore(
  persistR,
  {},
  compose(
    composeWithDevTools(applyMiddleware(thunk))
    )
  )
    
let persistor = persistStore(store);

const App = () => (
  <Provider store={store} persistor={persistor}>
    <BrowserRouter>
      <div className="App">
            <Route exact path = '/' component={LandingPage} />
            <Route exact path = '/paketsec' component={Products} />
            <Route exact path = '/nasil' component={How} />
            <Route exact path = '/girisyap' component={SignIn} />
            <Route exact path = '/cekaut' component={Checkout} />
            <Route exact path = '/profil' component={Homepage} />
            <Route exact path = '/ode' component={Payment} />
            <Route exact path = '/varolus' component={Charity} />
            <Route exact path = '/item' component={Item} />
            {/* <Route exact path = '/ode' component={Review} /> */}
            {/* <Route exact path = '/uyeol' component={SignUp} />
            <Route exact path = '/iletisim' component={Contact} />
            <Route exact path = '/paketim' component={Package} />
            <Route exact path = '/iptal' component={Cancellation} />
            <Route exact path = '/bye' component={Bye} /> */}
      </div>
    </BrowserRouter>
  </Provider>

)


export default App;