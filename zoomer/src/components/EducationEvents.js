import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import FavoriteIcon from '@material-ui/icons/Favorite';



import '../App.css';

class EducationEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        };
    }


    callAPI() {
    fetch(process.env.REACT_APP_DOMAIN + "/events/education")
        .then(res => res.json())
        .then(res => this.setState({ results: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    handleClick = (favorite) => {
        let favorites = [];
        favorites.push(favorite);
        localStorage.setItem('setFavorite', JSON.stringify(favorites))
        
        console.log('this is cards', JSON.parse(localStorage.getItem('setFavorite')))

    }


    render() {
        return(

            <div className="container">

                <div id="eventButtons">
                    <br />                    
                    <button className="btn"><Link to="/AllEvents">All Events</Link></button>                    
                    <button className="btn"><Link to="/ArtEvents">Art</Link></button>
                    <button className="btn"><Link to="/CareerEvents">Career</Link></button>
                    <button className="btn active"><Link to="/EducationEvents">Education</Link></button>
                    <button className="btn"><Link to="/VolunteerEvents">Volunteer</Link></button>                    
                    <br />                    
                    <button className="btn"><Link to="/YourEvents">Your Events</Link></button>
                </div> 

            <div className="EventsContainer">

                <h2 className="EventHeader">Education</h2>      


                    {this.state.results.map((item, i) =>
                        <div key={i} className="EventsCard">

                            <div className="favoriteBorder">

                
                                    <FavoriteIcon className="favoriteBorderActive"
                                        onClick={() => this.handleClick(item)} /> 
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

export default EducationEvents