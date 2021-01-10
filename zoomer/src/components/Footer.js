import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../App.css';
import './Credits';

const Footer = () => {
    return (
        <div className="footer">

            <h4 className="Credits"><Link to="/Credits">Credits</Link></h4>
        </div>
    )
}

export default Footer;