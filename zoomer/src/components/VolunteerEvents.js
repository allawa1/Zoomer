import React, { Component } from 'react';

import '../App.css';

class Volunteer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        name:'',
        };
    }

    callAPI() {

        fetch(process.env.REACT_APP_DOMAIN + "/events/volunteer")
            .then(res => res.json())
            .then(res => this.setState({ results: res }));

    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return(

        <p className="App-intro">{this.state.apiResponse}</p>



        )
    }
}

export default Volunteer