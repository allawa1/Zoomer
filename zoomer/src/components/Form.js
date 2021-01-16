import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';


import '../App.css';


const Form = () => {
    return (
        <div className="Form">
            <h2>Host your own event</h2>
            <h3>Fill out this form to get started</h3>

            <form action=""
            method="POST"
            enctype="multipart/form-data"
            name="PostForm">
                <div className="fields">
                Event Name:<br/>
                <input type="text" size="30" name="Event-Name"/><br/>
                </div>

                <div className="fields">
                Date of Event: <br/>
                <input type="date" name="Event-Date"/> <br/>
                </div>

                <div className="fields">                                
                Event Location:<br />
                <input type="text" size="30" name="Event-Location"/><br/>
                 </div>               

                <div className="fields">
                Event Details:<br/> 
                <textarea name="Event-Details" rows="8" cols="60">
                </textarea><br/><br/> 
                <button type="submit" value="Submit" className="register-btn">Register</button>
                </div>

            </form>
        </div>
    )
}

export default Form;