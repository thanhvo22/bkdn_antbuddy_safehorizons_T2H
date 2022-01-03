//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './component/auth/Login';
import Home from './component/layout/Home';
import RegisterForm from './component/auth/RegisterForm';
import Customer from './component/auth/Customer';
import Main from './component/layout/Main';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' component={Main} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={RegisterForm} />
        <Route exact path='/customer' component={Customer} />
      </Switch>
    </Router>
  );
}

export default App;
