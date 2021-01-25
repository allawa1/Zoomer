import React from 'react';
import { Link } from 'react-router-dom';
import { AboutGrid } from './AboutGrid';

import '../App.css';
const About = () => {

    return (
        <div>

            <div className="AboutSection">
                <h2>About Company</h2>
                <p><b>ZOOMER</b> was founded on the idea of connecting online users
                    <br /> to training seminars, volunteering opportunities, hiring events
                    <br /> and many more services across the globe, virtually!</p>
                <br />
                <p>We have an opportunity to make worldwide events and personal goals
                    <br />even more attainable through our online platform.</p>
                <br />
                <p>Traveling nomads, introverts, extroverts, 
                    <br />creators, thinkers and do-ers
                    <br />can all join virtual meetups,
                    <br />attend webinars, explore new hobbies,
                    <br />and more with the help of our global partners.</p>
                <br />

                <Link to="./Dashboard" ><h3>Click here to get started!</h3></Link>
                <br />


            </div>

            <hr className="hr" />
            <br />
            <br />

            <div className="eventgrid">
                <h2>Meet our Creators</h2>
                <AboutGrid />
            </div>

        </div>

    )

}

export default About;