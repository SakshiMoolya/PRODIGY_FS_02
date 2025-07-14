import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adduser" component={AddUser} />
           <Route exact path="/edituser/:id" component={EditUser} />
            <Route exact path="/viewuser/:id" component={ViewUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
