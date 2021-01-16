import React from 'react';
import { Link } from 'react-router-dom';

import Dashboard from './Dashboard';

import { EventisGrid } from './EventGrid';

import '../App.css';
const About = () => {

    return (
        <div>

            <div className="AboutSection">
                <h2>About Company</h2>
                <p>ZOOMER was founded on the idea of connecting online users to conferences, 
                    <br/>volunteering opportunities, hiring events and many more across the globe, virtually!</p>
                <br />
                <p>We have an opportunity to make education and career services more accessible 
                    <br />through online services with the help of our global partners.</p>
                <br />
                <p>Teachers, sports enthusiasts and traveling nomads 
                    <br />can join virtual meetups, attend webinars or explore new hobbies.</p>
                <br />
                <br />
                <Link to="./Dashboard" ><h3>Click here to get started!</h3></Link>
                <br />
                <br />
                <br />
                                      
            </div>

            <hr className="hr"/>
                <br />
                <br />

            <div className="eventgrid">
                <h2>Meet our Creators</h2>
                <EventisGrid/>
            </div>

        </div>
             
     )
                
}

export default About;