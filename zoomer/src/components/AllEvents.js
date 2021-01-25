import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


import '../App.css';


class AllEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        };
    }

    callAPI() {

        fetch(process.env.REACT_APP_DOMAIN + "/events")
            .then(res => res.json())
            .then(res => this.setState({ results: res }));

    }

    componentWillMount() {
        this.callAPI();
    }


    handleClick = () => {
        this.setState({
            bgImg: 'rgb( 255, 194, 13)'
        })
    }

    render() {
        return(

            <div className="container">


                <div id="eventButtons">
                    <button className="btn active"><Link to="/AllEvents">All Events</Link></button>
                    <button className="btn"><Link to="/ArtEvents">Art</Link></button>
                    <button className="btn"><Link to="/CareerEvents">Career</Link></button>
                    <button className="btn"><Link to="/EducationEvents">Education</Link></button>
                    <button className="btn"><Link to="/VolunteerEvents">Volunteer</Link></button>                    
                    <br />
                    <button className="btn"><Link to="/YourEvents">Your Events</Link></button>
                    <button className="btn"><Link to="/TodaysEvents">Today's Events</Link></button>                                   
               </div> 

                <div className="EventsContainer">

                <h2 className="EventHeader">All Events</h2>
                
                {this.state.results.map((item, i) => 
                <div key={i} className="EventsCard">

                    <div className="favoriteBorder">
                        
                         <FavoriteIcon className="favoriteBorderActive"  /> 
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

export default AllEvents