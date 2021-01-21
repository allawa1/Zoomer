import React from 'react';
import GoogleLogout from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';


const clientID = '315221332011-2jhmuo70avtsapis9cmn6af4are8qsj6.apps.googleusercontent.com'


function Logout() {
    const onSuccess = () => {
        console.log("logout")
        alert('Logout made successfully');
    }

    return (
        <div>
            <GoogleLogout
                clientId={clientID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout; 