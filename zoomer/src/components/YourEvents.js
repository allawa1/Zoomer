import { React, Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import './Credits';

class YourEvents extends Component {

    constructor(props) {
        super(props)
        let cardEvents = JSON.parse(localStorage.getItem('selectedCards'))
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
            <button className="btn"><Link to="/TodaysEvents">Current Events</Link></button>                                   
            </div> 

            <h2 className="EventHeader">Your Events</h2>

                <div className="EventsContainer">

                    <p>{this.state.cardEvents[0].title}</p>
                    <p>{this.state.cardEvents[0].description}</p>
                {/* {this.state.results.map((item, i) => 
                <div key={i} className="EventsCard">

                    <div className="favoriteBorder">
                        
                        <Link to="#"> 
                        <FavoriteIcon className="favoriteBorderActive" 
                        onClick={() => this.handleClick(item)}  /> </Link>
                    </div>
                    
                   <div className="EventsCardContent">
                    <h2>{item.title}</h2>

 
                    <p>{item.description}</p>         


                    <h4>Date: </h4>
                    <p>{item.date}</p>

                    <h4>Event ID: </h4>
                    <p>{item.eventID}</p>
                 </div>



   
                </div>)} */}
                </div>
            </div>

        )
    }
}



export default YourEvents;