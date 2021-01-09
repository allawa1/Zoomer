import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


const clientID = '315221332011-2jhmuo70avtsapis9cmn6af4are8qsj6.apps.googleusercontent.com'


function Logout(){
    const onSuccess = () => {
        console.log("logout")
        alert('Logout made successfully');
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}>
                </GoogleLogin>
        </div>
    )
}

export default Logout; 