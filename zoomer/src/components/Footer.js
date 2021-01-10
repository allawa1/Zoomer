import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import './Credits';

const Footer = () => {
    return (
        <div className="footer">

            <h4><Link to="/Credits">Credits</Link></h4>
        </div>
    )
}

export default Footer;