import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

// import Form from './Form';
// import TodaysEvents from './TodaysEvents';
// import EducationEvents from './EducationEvents'; 
// import VolunteerEvents from './VolunteerEvents'; 
// import ArtEvents from './ArtEvents'; 
// import CareerEvents from './CareerEvents'; 


import '../App.css';



class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        name:'',
        };
    }

    handleChange(){
        
    }


    render(){
    return (
        <div className="dashboard-div">
            <div className="dashboard-header">

                    <input className="searchbar" type="text" placeholder="search"/>
                    <Link to="/">
                    <SearchIcon className="searchbar-icon" fontSize="small"/>
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
                <div className="column" >
                    <div className="card">
                        <hr width="50%"/>
                        <h2 ><Link to="/TodaysEvents">Today's Events</Link></h2>
                        <hr width="50%"/>
                    </div>
                </div>

                <div className="column" >
                    <div className="card">
                        <hr width="50%"/>                        
                        <h2><Link to="/CareerEvents">Career</Link></h2>
                        <hr width="50%"/>                        
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <hr width="50%"/>                        
                        <h2><Link to="/EducationEvents">Education</Link></h2>
                        <hr width="50%"/>                        
                    </div>
                </div>

            </div>

            <div className="row" >
                <div className="column" >
                    <div className="card">
                        <hr width="50%"/>                        
                        <h2 ><Link to="/VolunteerEvents">Volunteer</Link></h2>
                        <hr width="50%"/>                        
                    </div>
                </div>

                <div className="column" >
                    <div className="card">
                        <hr width="50%"/>                        
                        <h2><Link to="/ArtEvents">Arts</Link></h2>
                        <hr width="50%"/>                        
                    </div>
                </div>

                <div className="column" >
                    <div className="card host-event">
                        <hr width="50%"/>                        
                        <h2 className="event-title" ><Link to="/Form">Host an event!</Link></h2>
                        <hr width="50%"/>                    
                    </div>
                </div>


            </div>


        </div>
    )
}
}

export default Dashboard;