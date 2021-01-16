import React from 'react';
import { Link } from 'react-router-dom';

import copywright from '../assets/images/copywright.png'


import '../App.css';
import './Credits';

const Footer = () => {
    return (
        <div className="footer">

            <h4 className="Credits"><Link to="/Credits">Credits</Link></h4>
             <h4>All rights reserved</h4>
            <h4><img src={copywright} alt="copywright" height="12px" width="13px"/> ZOOMER INC.</h4>    
            
        </div>
    )
}

export default Footer;