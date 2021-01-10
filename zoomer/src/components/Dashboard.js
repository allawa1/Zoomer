import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

/* import ReactGridDetailExpansion from 'react-expandable-grid';

 */



import '../App.css';

/* 
var data = [
    {
        'img': 'image url',
        'link': 'link url',
        'title': 'text',
        'description': 'text'
    },

    {
        'img': 'image url',
        'link': 'link url',
        'title': 'text',
        'description': 'text'
    },

    {
        'img': 'image url',
        'link': 'link url',
        'title': 'text',
        'description': 'text'
    }
]

var data_string = JSON.stringigy(data)
/*  */
/* 
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ReactExpandableGrid
      gridData={dataString}
      detailHeight={300}
      ExpandedDetail_image_size={300}
      cellSize={250}
      ExpandedDetail_closeX_bool={false}
    />,
    document.querySelector('#app')
  )
})
  */
const Dashboard = () => {


    return (
        <div className="dashboard-div">
            <div className="dashboard-header"> 
            <h1>Dashboard</h1>
            </div>

            <div className="row" >
                <div className="column" onclick="openTab('b1')" >
                <div className="card">
                    <h2 ><Link to="/">Today's Events</Link></h2>
                 </div>
                 </div>

                <div className="column" onclick="openTab('b1')" >
                <div className="card">
                    <h2><Link to="/">Virtual Training</Link></h2>
                 </div>
                 </div>

                <div className="column" onclick="openTab('b1')" >
                <div className="card">
                    <h2><Link to="/">Social Gatherings</Link></h2>
                 </div>
                 </div>

            </div>
            
            <div className="row" >
                <div className="column" onclick="openTab('b1')" >
                <div className="card">
                    <h2 ><Link to="/">Today's Events</Link></h2>
                 </div>
                 </div>

                <div className="column" onclick="openTab('b1')" >
                <div className="card">
                    <h2><Link to="/">Virtual Training</Link></h2>
                 </div>
                 </div>

                <div className="column" onclick="openTab('b1')" >
                <div className="card">
                    <h2><Link to="/">Join Podcast Community</Link></h2>
                 </div>
                 </div>


            </div>


        </div>
    )
}

export default Dashboard;