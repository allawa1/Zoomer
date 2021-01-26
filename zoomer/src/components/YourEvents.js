import { React, Component } from 'react';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import AllEvents from './AllEvents'

import '../App.css';
import './Credits';

class YourEvents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cardEvents: [],
            results: []            
        };


    }




  componentWillMount() {
    let cardEvents = JSON.parse(localStorage.getItem('selectedCards'))
      console.log(cardEvents)

    }

    handleClick = (card) => {
        let cards = [];
        cards.push(card);
        localStorage.setItem('selectedCards', JSON.stringify(cards))
        console.log('this is cards', JSON.parse(localStorage.getItem('selectedCards')))
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
                {this.state.results.map((item, i) => 
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



   
                </div>)}
                </div>
            </div>

        )
    }
}



export default YourEvents;