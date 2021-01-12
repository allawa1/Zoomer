import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import '../App.css';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        name:'',
        };
    }
    // componentDidMount(){
    //     const data = JSON.parse(sessionStorage.getItem('userData'));
    //     console.log(data)
    //     let data1= data;
    //     console.log(data1.data.Name);

    //     console.log(data1.Name);
    //     this.setState({name:data1.data.Name})
    // }

    render(){
    return (
        <div className="dashboard-div">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>

            <div className="row" >
                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2 ><Link to="/">Today's Events</Link></h2>
                    </div>
                </div>

                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2><Link to="/">Virtual Training</Link></h2>
                    </div>
                </div>

                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2><Link to="/">Social Gatherings</Link></h2>
                    </div>
                </div>

            </div>

            <div className="row" >
                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2 ><Link to="/">Today's Events</Link></h2>
                    </div>
                </div>

                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2><Link to="/">Virtual Training</Link></h2>
                    </div>
                </div>

                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2><Link to="/">Join Podcast Community</Link></h2>
                    </div>
                </div>


            </div>


        </div>
    )
}
}

export default Dashboard;