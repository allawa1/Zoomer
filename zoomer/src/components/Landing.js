import React from 'react'
import { Link} from 'react-router-dom';


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
                        <p  className="Landing-description">Discover new interests from painting, meditation or yoga to writing, singing or volunteering. </p>
                        <p  className="Landing-description">A place for creators, do-ers and thinkers.</p>
                        <p  className="Landing-description">All available worldwide.</p>
                        <p  className="Landing-description Landing-register"><Link to="/Dashboard">Get Started</Link></p>
                </div>
                </div>

            <div className="Landing-div fade">            
                <div className="Landing-Refresh">

                    <div className="Refresh-img"> </div>  
                    
                    <div className="Landing-header">                    
                        <h1>REFRESH</h1>            
                    </div>

                        <p  className="Landing-description">Browse tutorials, exam preps and mock interviews to boost your career goals.</p>
                        <p  className="Landing-description">Math, Science, History, Photograpy,</p>
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

                        <p className="Landing-description">Whether you're exploring a new hobby or developing a new skill, there's a good chance someone else is to.</p>
                        <p className="Landing-description">Join a community where your creativity and passion are not only supported, but encouraged.</p>                     
                        <p className="Landing-description Landing-register"><Link to="/Dashboard">Get Started</Link></p>
                   


                </div>
            </div>

            <div className="Landing-div fade">      
                <div className="Landing-Host">

                    <div className="Host-img"> </div>                              

                    <div className="Landing-header">                        
                        <h1>HOST</h1>                    
                    </div>

                        <p className="Landing-description">Whatever your niche, there's an event made just for you.</p>
                        <p className="Landing-description">Have a new idea?</p>
                        <p className="Landing-description Landing-register"><Link to="/Form">Register </Link> and create your very own event!</p>
                                         

                </div>

            </div>
     
        </div>
        
    )

}


export default Landing;