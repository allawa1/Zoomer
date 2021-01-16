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
                <p><b>ZOOMER</b> was founded on the idea of connecting online users 
                   <br/> to training seminars, volunteering opportunities, hiring events 
                   <br /> and many more services across the globe, virtually!</p>
                <br />
                <p>We have an opportunity to help make worldwide events and personal goals
                    <br />even more accessible through our online platform.</p>
                <br />
                <p>Traveling nomads, students, teachers and athletes
                    <br />can join virtual meetups, attend webinars or explore new hobbies 
                    <br />with the help of our global partners.</p>
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