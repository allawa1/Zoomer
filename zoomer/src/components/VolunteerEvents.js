import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';


import '../App.css';

class Volunteer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        name:'',
        };
    }

    callAPI() {
    fetch("http://localhost:5000/events")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
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