import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
import '../App.css';
// import { refreshTokenSetup } from '../utils/refreshToken'
// import Logout from './Logout';


const clientID = '315221332011-2jhmuo70avtsapis9cmn6af4are8qsj6.apps.googleusercontent.com'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { isAuthenticated: false, user: null, token: ''
        };
    }
    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };
        signup(res){
            const googleresponse = {
                Name: res.profileObj.name,
                email: res.profileObj.email,
                token: res.googleId,
                Image: res.profileObj.imageUrl,
                ProviderId: 'Google'
            };
            
            axios.post(process.env.REACT_APP_DOMAIN, '/users', 
            googleresponse)
                .then((result)=> {
                    sessionStorage.setItem("userData", JSON.stringify(result))
                });
            
        }
        render(){
            // const onSuccess = (res) => {
            //     console.log('[Login Success] currentUser:', res.profileObj);

            //     // alert(
            //     //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
            //     // );

            //     refreshTokenSetup(res)
            // }

            const onFailure = (res) => {
                console.log('[Login Failed] res:', res);
            }

            const responseFacebook = (response) => {
                console.log(response);
                //this.signup(response);
            }
            const responseGoogle = (response) => {
                var res = response.profileObj;
                console.log(res);
                this.signup(response);
            }
        
            return (
                <div className="login">
                    <GoogleLogin
                        clientId={clientID}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        style={{ marginTop: '100px' }}
                        isSignedIn={true}
                    />
                    <br />
                    <FacebookLogin
                        appId="386997969259212"
                        fields="name,email,picture"
                        callback={responseFacebook}
                    />
                    <br />

                </div>
            )
        }
    }

    export default Login;