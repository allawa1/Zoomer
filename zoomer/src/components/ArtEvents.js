import React, { Component } from 'react';

import '../App.css';

class ArtEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {
        name:'',
        };
    }

    callAPI() {
                console.log(process.env.REACT_APP_DOMAIN)
    fetch(process.env.REACT_APP_DOMAIN + "/events/art")
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

export default ArtEvents