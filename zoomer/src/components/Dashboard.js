import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';



// import Form from './Form';
//import TodaysEvents from './TodaysEvents';
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

                    <input className="searchbar" type="text" placeholder="search events..."/>
                    <Link to="/">
                    <SearchIcon className="searchbar-icon" fontSize="small"/>
                    </Link>

            </div>

                <section className="sub-nav">
                    <ul>
                        <li><Link to={'/YourEvents'}><h2>Your Events</h2></Link></li>

                    </ul>
                </section>


            <div className="row" >
                <div className="column" onclick="openTab('b1')" >
                    <Link to={"/all"}>
                    <div className="card">
                        <hr width="50%"/>
                        <h2 >All Events</h2>
                        <hr width="50%"/>
                    </div>
                    </Link>
                </div>

                <div className="column" onClick="openTab('b1')" >
                    <Link to="/CareerEvents">
                    <div className="card">
                        <hr width="50%"/>                        
                        <h2>Career</h2>
                        <hr width="50%"/>                        
                    </div>
                    </Link>
                </div>

                <div className="column" onClick="openTab('b1')" >
                    <Link to="/EducationEvents">
                    <div className="card">
                        <hr width="50%"/>                        
                        <h2>Education</h2>
                        <hr width="50%"/>               
                    </div>
                    </Link>                             
                </div>

            </div>

            <div className="row" >
                <div className="column" onClick="openTab('b1')" >
                    <Link to="/VolunteerEvents">                    
                    <div className="card">
                        <hr width="50%"/>                        
                        <h2 >Volunteer</h2>
                        <hr width="50%"/>                        
                    </div>
                    </Link>
                </div>

                <div className="column" onClick="openTab('b1')" >
                    <Link to="/ArtEvents">                    
                    <div className="card">
                        <hr width="50%"/>                        
                        <h2>Arts</h2>
                        <hr width="50%"/>                        
                    </div>
                    </Link>
                </div>

                <div className="column" onClick="openTab('b1')" >
                    <Link to="/Form">
                    <div className="card host-event">
                        <hr width="50%"/>                        
                        <h2 className="event-title" >Host an event!</h2>
                        <hr width="50%"/>                    
                    </div>
                    </Link>
                </div>


            </div>


        </div>
    )
}
}

export default Dashboard;