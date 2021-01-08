import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';

import '../App.css';

const Header = () => {
    return (

    <div className="App-header"> 

        <div className="Zoomer-header">
        <h1 className="header-font"><Link to="/">ZOOMER</Link></h1>
        </div>

        <div className="navbar-header">
            <ul className="App-navbar">    
                <li><Link to="/Dashboard">Dashboard</Link></li>

                <li class="dropdown"><a href="javascript:void(0)">Login</a>
                    <div className="dropdown-content">
                        <Login />
                    </div>
                </li>

                <li><Link to="/SignUp">Sign Up</Link></li>
            </ul>  

        </div>


    
    </div>

    )
}

export default Header;