import React from 'react';
import { Link } from 'react-router-dom';

import copywright from '../assets/images/copywright.png'


import '../App.css';
import './Credits';

const Footer = () => {
    return (
        <div className="footer">

            <p className="Credits"><Link to="/Credits">Credits</Link></p>
             <p>All rights reserved</p>
            <p><img src={copywright} alt="copywright" height="12px" width="13px"/><b> ZOOMER</b></p>    
            
        </div>
    )
}

export default Footer;