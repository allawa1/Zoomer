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

        fetch(process.env.REACT_APP_DOMAIN + "/events/all")
            .then(res => res.json())
            .then(res => this.setState({ results: res }));

    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return(

            <div className="container">
                <div className="EventsContainer">
                {this.state.results.map((item, i) => 
                <div key={i} className="EventsCard">
                    
                    <h3>Event ID: </h3>
                    <p>{item.eventID}</p>

                    <h3>Event Title: </h3>
                    <p>{item.title}</p>

                    <h3>Event Description: </h3>                    
                    <p>{item.description}</p> 

                   <span class="stackIcons">
                        <div className="favoriteBorder">
                            <Link to="#"> <FavoriteBorderIcon className="favoriteBorderActive" /> </Link>
                            <Link to="#"> <FavoriteIcon className="favoriteBorderClicked" typeReversed/> </Link>                    
                        </div>
                    </span>




                </div>)}
                </div>
            </div>



        )
    }
}


export default AllEvents