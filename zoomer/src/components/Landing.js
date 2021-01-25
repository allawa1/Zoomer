import React from 'react'
import { Link} from 'react-router-dom';

import zoom from '../assets/images/zoom.jpg';

import '../App.css';


const Landing = () => {
    return (
        <div className="Landing">


            <div className="Landing-div">
                <div className="Landing-Discover">   
                    <div className="Landing-header">                 
                        <h1 >DISCOVER</h1>
                        <div className="Discover-img"> </div>
                    </div>

                        <p  className="Landing-description">Discover a new talent</p>

                        <p  className="Landing-description">Discover a new talent</p>

                        <p  className="Landing-description">Discover a new talent</p>
                </div>
                </div>

            <div className="Landing-div">            
                <div className="Landing-Refresh">
                    <div className="Landing-header">                    
                        <h1>REFRESH</h1>
                        <div className="Refresh-img"> </div>  
            
                    </div>


                        <p  className="Landing-description">Refresh your skills</p>

                        <p  className="Landing-description">Refresh your skills</p>

                        <p  className="Landing-description">Refresh your skills</p>
                                                      


                </div>
            </div>

            <div className="Landing-div">                   
                <div className="Landing-Join">
                    <div className="Landing-header">                        
                        <h1>JOIN</h1>
                        <div className="Join-img"> </div>                          
                    </div>

                        <p className="Landing-description">Join a community</p>

                        <p className="Landing-description">Join a community</p>
                     
                        <p className="Landing-description">Join a community</p>
                   


                </div>
            </div>

            <div className="Landing-div">      
                <div className="Landing-Host">
                    <div className="Landing-header">                        
                        <h1>HOST</h1>
                        <div className="Host-img"> </div>                              
                    </div>

                        <p className="Landing-description">Host an event</p>

                        <p className="Landing-description">Host an event</p>

                        <p className="Landing-description"><Link to="/Form">Register Your Event</Link></p>
                                         

                </div>

            </div>
        </div>
    )
}

export default Landing;