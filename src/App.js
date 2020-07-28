import React from 'react';
import { Switch, Route} from 'react-router-dom';
import 'reset-css';
import './styles/App.scss';

//components
import UserDashboard from './components/UserDashboard';
import AddProperty from './components/AddProperty';
import Register from './components/register/register';
import Login from './components/Login/components/Log';
import PrivateRoute from './components/PrivateComponent';
import Navbar from './components/navbar/navbar'


function App() {
  return (
    <div>
    <Navbar />
    <Switch> 
      <Route path="/register" render={() => <Register />} />
      <Route path="/login" render={() => <Login />} />
      <PrivateRoute path='/add-property'>
        <AddProperty />
      </PrivateRoute>
      <PrivateRoute path='/'>
        <UserDashboard />
      </PrivateRoute>
    </Switch>
    </div>
  );

}

export default App;


