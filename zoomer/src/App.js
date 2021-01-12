import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import Credits from './components/Credits';
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Landing from './components/Landing'


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
          <Route exact path="/Credits" component={Credits} />
          <Route exact path="/Login" component={Login} /> 
          <Route exact path="/About" component={About} />                        
          
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
