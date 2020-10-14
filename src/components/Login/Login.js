import React from 'react';
import logo from '../../images/logos/logo.png';
import {Link, useHistory, useLocation} from 'react-router-dom';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useContext } from 'react';

const Login = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let {from} = location.state || {from: {pathname: "/"}};
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const {displayName, email} = result.user;
                const SignedInUser = {name: displayName, email: email};
                setLoggedInUser(SignedInUser);
                history.replace(from);
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
    return (
        <div className="login-container">
            <div className="logo mt-5">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="createAccountWithFbGoogle">
                <h2 className="mt-4">Login</h2>
                <div className ="loginBtn" onClick = {handleGoogleSignIn}>
                    <img src = "https://i.ibb.co/xC3RNVs/google.png" alt = "" />
                    <p className = "text-middle" > <strong>Continue with Google</strong></p>
                </div >
                <div>
                    <p>Don't have an account? <a href="http://localhost:3000/login">Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;