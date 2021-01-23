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
<<<<<<< HEAD
    fetch(process.env.REACT_APP_DOMAIN + "/events/career")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
=======
        fetch(process.env.REACT_APP_DOMAIN + "/events/career")
            .then(res => res.json())
            .then(res => this.setState({ results: res }));
>>>>>>> cce1592388bd0335ad07d81c76c30dbd41589945
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