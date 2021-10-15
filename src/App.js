import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About, Contact, Skills, Projects } from './pages'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Switch>
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
        <Route path='/' component={About} />
      </Switch>

      </Router>


    </div>
  );
}

export default App;
