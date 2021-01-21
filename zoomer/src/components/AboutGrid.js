import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom';


export class _AboutGrid extends Component {

    state = {
        grid: ['Alexia','Daisy','Christy']
    }
    
    redirectClick = (tag) => {
        this.props.history.push(`/${tag}`)
    }

    capitalizeBox = (box) => {
        return box.charAt(0).toUpperCase() + box.slice(1);
    }


    render() {
        const {grid} = this.state;
        return (
            <React.Fragment>


                
                <section className="events-grid ">
                {grid.map(box=> (
                <div className="flip-card" key={box}>
                        <div className="flip-card-inner" onClick={(ev)=>{this.redirectClick(box)}}> 
                            <div className="flip-card-front">
                                <h1 className="title">{this.capitalizeBox(box)}<span className="dote"></span></h1>
                            </div>
                            <div className="flip-card-back">
                               <p> <Link to="/Alexia">See more bio</Link></p>
                            </div>

                            <div className="flip-card-back">
                                <Link to="/Daisy"><p>See more bio</p></Link>
                            </div>

                            <div className="flip-card-back">
                                <Link to="/Christy"><p>See more bio</p></Link>
                            </div>

                        </div>
                    </div>
                ))}
                </section>
            </React.Fragment>
        )
    }
}

export const AboutGrid = withRouter(_AboutGrid)
