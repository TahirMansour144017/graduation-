import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from './SignUp';
import * as serviceWorker from './serviceWorker';
import StartPage from './LoginPage';
import SPD from "./SPD"
import SPC from './SPC'
import SignUpCustomer from './components/signUpcustomer'
import  Trial  from './SignUpCustomer2';
import Starting from './starting'
import SignupDistributor from './signupDistributor';
import CardComponent from './cards'
import Profile from './profile';
import NavBar from './Navigation/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <StartPage  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

