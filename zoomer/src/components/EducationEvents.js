import React, { Component } from 'react';



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
                </div>)}
                </div>
            </div>

        )
    }
}

export default EducationEvents