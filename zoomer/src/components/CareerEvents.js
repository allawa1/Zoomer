import React, { Component } from 'react';

import '../App.css';

class CareerEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {
        name:'',
        };
    }

    callAPI() {
    fetch(process.env.REACT_APP_DOMAIN + "/career")
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

export default CareerEvents