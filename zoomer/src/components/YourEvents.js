import React from 'react';
import { Link } from 'react-router-dom';


import '../App.css';
import './Credits';

const YourEvents = () => {
    return (

        <div className="container">
            <div id="eventButtons">
            <button className="btn"><Link to="/AllEvents">All Events</Link></button>
            <button className="btn"><Link to="/CareerEvents">Career</Link></button>
            <button className="btn"><Link to="/EducationEvents">Education</Link></button>
            <button className="btn active"><Link to="/VolunteerEvents">Volunteer</Link></button>
            <button className="btn"><Link to="/ArtEvents">Art</Link></button>
            <br />                    
            <button className="btn"><Link to="/YourEvents">Your Events</Link></button>
            <button className="btn"><Link to="/TodaysEvents">Today's Events</Link></button>                                   
            </div> 


            <h2 className="EventHeader">Your Events</h2>

        </div>
    )
}

export default YourEvents;