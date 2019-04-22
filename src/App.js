import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homescreen from './components/homescreen/homescreen';
import * as firebase from 'firebase';

class App extends Component {

  

  componentWillMount() {
    let firebaseConfig = {
      apiKey: "AIzaSyCHcfez2Dc4UHn9611joddAaEdemkLo4MQ",
      authDomain: "vivo-b3f86.firebaseapp.com",
      databaseURL: "https://vivo-b3f86.firebaseio.com",
      projectId: "vivo-b3f86",
      storageBucket: "vivo-b3f86.appspot.com",
      messagingSenderId: "72620720352"
    };
    
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <div className="App">
        <Homescreen/>
      </div>
    );
  }
}

export default App;
