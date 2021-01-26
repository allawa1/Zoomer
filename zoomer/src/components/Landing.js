import React from 'react'
import { Link} from 'react-router-dom';

import zoom from '../assets/images/zoom.jpg';
import join from '../assets/images/join.jpg';

import '../App.css';


const Landing = () => {
    return (
        <div className="Landing">


            <div className="Landing-div fade">
                <div className="Landing-Discover">           
                    <div className="Discover-img"> </div>

                    <div className="Landing-header">                             
                        <h1 >DISCOVER</h1>
                    </div>
                        <p  className="Landing-description">Discover new interests and explore painting, yoga, writing or volunteering events. </p>
                        <p  className="Landing-description">A place for creators, dreamers, thinkers and do-ers.</p>
                        <p  className="Landing-description">All made available worldwide.</p>
                        <p  className="Landing-description Landing-register"><Link to="/Dashboard">Get Started</Link></p>
                </div>
                </div>

            <div className="Landing-div fade">            
                <div className="Landing-Refresh">

                    <div className="Refresh-img"> </div>  
                    
                    <div className="Landing-header">                    
                        <h1>REFRESH</h1>            
                    </div>

                        <p  className="Landing-description">Refresh your skills. Browse tutorials, exam preps and mock interviews to boost your career goals.</p>
                        <p  className="Landing-description">Math, Science, Photograpy, Accounting...</p>
                        <p  className="Landing-description">You name it!</p>

                        <p  className="Landing-description Landing-register"><Link to="/Dashboard">Get Started</Link></p>
                                                      


                </div>
            </div>

            <div className="Landing-div fade">                   
                <div className="Landing-Join">

                    <div className="Join-img"></div>                          

                    <div className="Landing-header">                        
                        <h1>JOIN</h1>
                    </div>

                        <p className="Landing-description">Whether you're exploring a new hobby or developing a new skill, there's a good chance someone else is too.</p>
                        <p className="Landing-description">Find your passion, become inspired, express yourself, meet your tribe. </p>                     
                        <p className="Landing-description Landing-register"><Link to="/Dashboard">Get Started</Link></p>
                   


                </div>
            </div>

            <div className="Landing-div fade">      
                <div className="Landing-Host">

                    <div className="Host-img"> </div>                              

                    <div className="Landing-header">                        
                        <h1>HOST</h1>                    
                    </div>

                        <p className="Landing-description">Whatever your niche, there is an event (or two!) you can explore.</p>
                        <p className="Landing-description">Have a new idea?</p>
                        <p className="Landing-description">Register an event and share your talent!</p>
                         <p className="Landing-description Landing-register"><Link to="/Form">Register here</Link> </p>
                                         

                </div>

            </div>
     
        </div>
        
    )

}


export default Landing;