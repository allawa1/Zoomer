import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      
      <main>

        <Switch>
          <Route exact path="/Dashboard" component={Dashboard} />        
        </Switch>

      </main>

      <Footer />
    </div>
  );
}

export default App;
