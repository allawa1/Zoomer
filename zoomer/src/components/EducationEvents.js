import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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

    handleClick = () => {
        this.setState({
            bgImg: 'rgb( 255, 194, 13)'
        })
    }

    render() {
        return(

            <div className="container">

                <div id="eventButtons">
                    <button className="btn"><Link to="/AllEvents">All Events</Link></button>                    
                    <button className="btn"><Link to="/ArtEvents">Art</Link></button>
                    <button className="btn"><Link to="/CareerEvents">Career</Link></button>
                    <button className="btn active"><Link to="/EducationEvents">Education</Link></button>
                    <button className="btn"><Link to="/VolunteerEvents">Volunteer</Link></button>                    
                    <br />                    
                    <button className="btn"><Link to="/YourEvents">Your Events</Link></button>
                    <button className="btn"><Link to="/TodaysEvents">Today's Events</Link></button>                                   
                </div> 

                <h2 className="EventHeader">Education</h2>      

                <div className="EventsContainer">
                {this.state.results.map((item, i) => 
                <div key={i} className="EventsCard">
                    
                    <h2>{item.title}</h2>
                                 
                    <p>{item.description}</p>         

                    <h4>Event ID: </h4>
                    <p>{item.eventID}</p>

                   <span class="stackIcons">
                        <div className="favoriteBorder">
                            
                            <Link to="#"> <FavoriteIcon className="favoriteBorderActive" 
                            onClick={this.handleClick} style={{color:this.state.bgImg}} typeReversed/> </Link>

                            <Link to="#"> <FavoriteBorderIcon className="favoriteBorderClicked" typeReversed/> </Link>                    
                        </div>
                    </span>

                </div>)}
                </div>
            </div>

        )
    }
}

export default EducationEvents