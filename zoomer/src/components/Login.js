import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import '../App.css';
import {refreshTokenSetup} from '../utils/refreshToken'
import Logout from './Logout';


const clientID = '315221332011-2jhmuo70avtsapis9cmn6af4are8qsj6.apps.googleusercontent.com'

function Login() {
        const onSuccess = (res) => {
            console.log('[Login Success] currentUser:', res.profileObj);

            // alert(
            //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
            // );

            refreshTokenSetup(res)
        }

        const onFailure = (res) => {
            console.log('[Login Failed] res:', res);
        }

        const responseFacebook = (response) => {
            console.log(response);
        }
        return (
            <div>
                <GoogleLogin
                    clientId={clientID}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px' }}
                    isSignedIn={true}
                />
                <br />
                <FacebookLogin
                    appId="386997969259212"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
                <br/>
                <Logout/>
            </div>
        )
    
}

export default Login;