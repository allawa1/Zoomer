import React from 'react';
import { Link} from 'react-router-dom';
import Logout from './Logout'
import SearchIcon from '@material-ui/icons/Search';

import Dashboard from './Dashboard';
import Login from './Login';

import profile from '../assets/images/profile.png';

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

                <li className="dropdown">
                    <Link to="/Login">
                        <img src={profile} alt="login profile" className="loginProfile"/>
                    </Link>
                    <div className="dropdown-content">
                        <Login />
                    </div>
                </li>
            <input className="searchbar" type="text" placeholder="search"/>
            <Link to="/">
            <SearchIcon fontSize="small"/>
            </Link>
        </div>


    </div>


    )
}

export default Header;