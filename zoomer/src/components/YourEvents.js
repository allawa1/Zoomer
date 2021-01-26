import { React, Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import './Credits';

class YourEvents extends Component {

    constructor(props) {
        super(props)
        let cardEvents = JSON.parse(localStorage.getItem('setFavorite'))
        localStorage.setItem('setCardEvents', JSON.stringify(cardEvents))

        console.log(cardEvents)
        this.state = {
            cardEvents: cardEvents,
            results: []            
        };


    }


    render () {



    return (

        <div className="container">
            <div id="eventButtons">
            <br />                
            <button className="btn"><Link to="/AllEvents">All Events</Link></button>
            <button className="btn"><Link to="/ArtEvents">Art</Link></button>
            <button className="btn"><Link to="/CareerEvents">Career</Link></button>
            <button className="btn"><Link to="/EducationEvents">Education</Link></button>
            <button className="btn"><Link to="/VolunteerEvents">Volunteer</Link></button>            
            <br />                    
            <button className="btn active"><Link to="/YourEvents">Your Events</Link></button>
            </div> 

            <h2 className="EventHeader">Your Events</h2>

                <div className="YourEventsCard">
                   <div className="EventsCardContent">

                    <h2>{this.state.cardEvents[0].title}</h2>
                    <p>{this.state.cardEvents[0].description}</p>
                    <h4>Date:</h4>
                    <p> {this.state.cardEvents[0].date}</p>
                 </div>
   
                </div>
            </div>

        )
    }
}



export default YourEvents;