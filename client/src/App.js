//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/auth/Login";
//import Home from './component/layout/Home';
import RegisterForm from "./component/auth/RegisterForm";
import Customer from "./component/admin/customer/Customer";
import Main from "./component/layout/Main";
import EditCustomer from "./component/admin/customer/EditCustomer";
import Product from "./component/product/Product";
import Home_admin from './component/admin/Home_admin';
import Home_Products from "./component/admin/products/Home_Products";
import Statistics from './component/admin/statistics/Statistics';


function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/product" component={Product} />

        {/* admin */}
        <Route exact path="/admin" component={Home_admin} />
        <Route exact path="/admin/customer" component={Customer} />
        <Route exact path="/customer/edit/:id" component={EditCustomer} />
        <Route exact path="/admin/products" component={Home_Products} />
        <Route exact path="/admin/statistics" component={Statistics} />
      </Switch>
    </Router>
  );
}

export default App;
