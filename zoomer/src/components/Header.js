import React from 'react';
import { Link} from 'react-router-dom';
import Logout from './Logout'


import Dashboard from './Dashboard';
import Login from './Login';

import profile from '../assets/images/profile.png';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
                <li><Link to="/About">About</Link></li>
            </ul>  

        </div>

            <li className="dropdown">
                <Link to="/Login">
                    <AccountBoxIcon className="loginProfile"/>
                </Link>
                <div className="dropdown-content">
                    <Login />
                </div>
            </li>
    </div>


    )
}

export default Header;