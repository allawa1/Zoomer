import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import Credits from './components/Credits';
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Landing from './components/Landing'
import Form from './components/Form'
import TodaysEvents from './components/TodaysEvents'
import EducationEvents from './components/EducationEvents'
import VolunteerEvents from './components/VolunteerEvents'
import ArtEvents from './components/ArtEvents'
import CareerEvents from './components/CareerEvents'

import Axios from 'axios'

import Alexia from './components/Alexia';
import Daisy from './components/Daisy';
import Christy from './components/Christy';
import { Component } from 'react';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}



  render(){



  return (
    <div className="App">
      <header>
        <Header/>
          
          <div>
            <small>You are running this application in <b>{process.env.NODE_ENV}</b></small>
            
          </div>
     
     
      </header>
      
      <main>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Form" component={Form} />                
          <Route exact path="/Credits" component={Credits} />
          <Route exact path="/Login" component={Login} /> 
          <Route exact path="/TodaysEvents" component={TodaysEvents} />           
          <Route exact path="/EducationEvents" component={EducationEvents} />   
          <Route exact path="/VolunteerEvents" component={VolunteerEvents} />   
          <Route exact path="/events/art" component={ArtEvents} />                       
          <Route exact path="/CareerEvents" component={CareerEvents} />                       
          <Route exact path="/About" component={About} />                        
          <Route exact path="/Alexia" component={Alexia} />                
          <Route exact path="/Daisy" component={Daisy} />                 
          <Route exact path="/Christy" component={Christy} />   
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}
}

export default App;
