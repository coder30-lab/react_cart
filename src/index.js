import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
// import * as  serviceWorker from './serviceWorker';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDgzmkZdSkpIQTP8x05Vdyg7fzF8cQDLpQ",
  authDomain: "cart-96c95.firebaseapp.com",
  projectId: "cart-96c95",
  storageBucket: "cart-96c95.appspot.com",
  messagingSenderId: "984542564522",
  appId: "1:984542564522:web:f2404530197b2ff9b7c0d3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// //reportWebVitals();
// serviceWorker.unregister();