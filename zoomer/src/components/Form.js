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
                Event Name:<br/>
                <input type="text" size="30" name="Event-Name"/><br/>

                Date of Event: <br/>
                <input type="date" name="Event-Date"/> <br/>
                
                Location:<br />
                <input type="text" size="30" name="Event-Location"/><br/>
                
                Event Details:<br/> 
                <textarea name="Event-Details" rows="8" cols="60">
                </textarea><br/>
                <button type="submit" value="Submit">Send</button>
                
            </form>
        </div>
    )
}

export default Form;