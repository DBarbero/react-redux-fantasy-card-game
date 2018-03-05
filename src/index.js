import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase'

import './index.css';
import App from './App';

/* Redux Stuff */
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './store/reducers'

import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDRZ6OGbl2r-xWcdCJ0DmGxdEBBiUPY7T0",
  authDomain: "fantasy-world-aa9bd.firebaseapp.com",
  databaseURL: "https://fantasy-world-aa9bd.firebaseio.com",
  projectId: "fantasy-world-aa9bd",
  storageBucket: "fantasy-world-aa9bd.appspot.com",
  messagingSenderId: "353566082385"
});

// firebase.database().ref('/cards').once('value').then( snapshot => console.log(snapshot.val()))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
