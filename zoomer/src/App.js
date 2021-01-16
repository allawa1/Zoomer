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



function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      
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

export default App;
