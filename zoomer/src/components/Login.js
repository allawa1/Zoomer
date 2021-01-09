import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


const clientID = '315221332011-2jhmuo70avtsapis9cmn6af4are8qsj6.apps.googleusercontent.com'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: false,
            redirect: false
        };
        this.signup = this
            .signup
            .bind(this);
    }

    signup(res, type) {
        let postData;
        if (type === 'facebook' && res.email) {
            postData = {
                name: res.name,
                provider: type,
                email: res.email,
                provider_id: res.id,
                token: res.accessToken,
                provider_pic: res.picture.data.url
            };
        }

        if (type === 'google' && res.w3.U3) {
            postData = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            };
        }
    }
    render() {
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
            </div>
        )
    }
}

export default Login;