import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
