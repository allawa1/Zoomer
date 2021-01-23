import React, { Component } from 'react';

import '../App.css';

class CareerEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        };
    }

    callAPI() {
        fetch(process.env.REACT_APP_DOMAIN + "/events/career")
            .then(res => res.json())
            .then(res => this.setState({ results: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {

        return (

            <div>
                {this.state.results.map((item, i) => 
                <div key={i}>
                    <p>{item.eventID}</p>
                    <p>{item.title}</p>
                </div>)}
            </div>



        )
    }
}

export default CareerEvents