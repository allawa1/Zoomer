import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

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

                    <input className="searchbar" type="text" placeholder="search"/>
                    <Link to="/">
                    <SearchIcon fontSize="small"/>
                    </Link>

            </div>

                <section className="sub-nav">
                    <ul>
                        <li><Link to={'/all'}>All events</Link></li>
                        <li><Link to={'/yours'}>Your events</Link></li>
                        <li><Link to={'/today'}>Today</Link></li>
                    </ul>
                </section>


            <div className="row" >
                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2 ><Link to="/">Today's Events</Link></h2>
                    </div>
                </div>

                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2><Link to="/">Career</Link></h2>
                    </div>
                </div>

                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2><Link to="/">Education</Link></h2>
                    </div>
                </div>

            </div>

            <div className="row" >
                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2 ><Link to="/">Volunteer</Link></h2>
                    </div>
                </div>

                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2><Link to="/">Sports</Link></h2>
                    </div>
                </div>

                <div className="column" onclick="openTab('b1')" >
                    <div className="card">
                        <h2><Link to="/">Arts & Culture</Link></h2>
                    </div>
                </div>


            </div>


        </div>
    )
}
}

export default Dashboard;