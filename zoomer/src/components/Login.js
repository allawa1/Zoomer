import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
import '../App.css';
import { refreshTokenSetup } from '../utils/refreshToken'
import Logout from './Logout';


const clientID = '315221332011-2jhmuo70avtsapis9cmn6af4are8qsj6.apps.googleusercontent.com'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

        signup(res){
            const googleresponse = {
                Name: res.profileObj.name,
                email: res.profileObj.email,
                token: res.googleId,
                Image: res.profileObj.imageUrl,
                ProviderId: 'Google'
            };
            
            axios.post('http://localhost:5000/api/login', 
            googleresponse)
                .then((result)=> {
                    let responseJson = result;
                    sessionStorage.setItem("userData", JSON.stringify(result))
                    this.props.history.push('/Dashboard')
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
            }
            const responseGoogle = (response) => {
                var res = response.profileObj;
                console.log(res);
                this.signup(response);
            }
        
            return (
                <div>
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
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={responseFacebook}
                    />
                    <br />

                </div>
            )
        }
    }

    export default Login;