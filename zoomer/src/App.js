import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import Credits from './components/Credits';
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Landing from './components/Landing'
import Form from './components/Form'

import Alexia from './components/Alexia';
import Daisy from './components/Daisy';
import Christy from './components/Christy';
import { Component } from 'react';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:5000/events")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

  render(){
  return (
    <div className="App">
      <header>
        <Header/>
        
      </header>
      <p className="App-intro">{this.state.apiResponse}</p>
      <main>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Form" component={Form} />                
          <Route exact path="/Credits" component={Credits} />
          <Route exact path="/Login" component={Login} /> 
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
