import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


const clientID = '315221332011-2jhmuo70avtsapis9cmn6af4are8qsj6.apps.googleusercontent.com'

function Login(){
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
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
                style={{marginTop: '100px' }}
                isSignedIn={true}
            />
            <br/>
            <FacebookLogin
                appId="386997969259212"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook} 
                />
        </div>
    )
}

export default Login;