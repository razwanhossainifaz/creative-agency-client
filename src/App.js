import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Review from './components/Dashboard/Review/Review';
import Service from './components/Admin/Service/Service';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <PrivateRoute path = '/dashboard/order'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path = '/dashboard/servicelist'>
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path = '/dashboard/review'>
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path = '/dashboard/servicelists'>
            <Service></Service>
          </PrivateRoute>
          <Route path = '/dashboard/addservices'>
            <AddService></AddService>
          </Route>
          <Route path = '/dashboard/makeadmin'>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path = '/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
