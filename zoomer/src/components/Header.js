import React from 'react';
import { Link} from 'react-router-dom';
import Logout from './Logout'
import SearchIcon from '@material-ui/icons/Search';

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

                <li className="dropdown"><Link to="/Login">Login</Link>
                    <div className="dropdown-content">
                        <Login />
                        

                    </div>
                </li>

                <li><Link to="/About">About</Link></li>
            </ul>  

                <input className="searchbar" type="text" placeholder="search"/>
            <SearchIcon fontSize="small"/>
            

        </div>


    </div>


    )
}

export default Header;