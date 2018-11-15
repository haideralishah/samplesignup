import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
var config = {
  apiKey: "AIzaSyBZYZptAREbru2bAT_dGl39EMeie9pZCOA",
  authDomain: "chatapp-6a2da.firebaseapp.com",
  databaseURL: "https://chatapp-6a2da.firebaseio.com",
  providerId: "https://chatapp-6a2da.firebaseapp.com/__/auth/handler",
  projectId: "chatapp-6a2da",
  storageBucket: "",
  messagingSenderId: "940451492073"
};
firebase.initializeApp(config);
ReactDOM.render(
  <MuiThemeProvider >
    <App />
  </MuiThemeProvider>
  ,
  document.getElementById('root'));
registerServiceWorker();
