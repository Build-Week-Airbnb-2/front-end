import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import 'reset-css';
import './styles/App.scss';
import Login from './components/Login/components/Login'

//components
import UserDashboard from './components/UserDashboard';
import AddProperty from './components/AddProperty';
import Register from './components/register/register';

function App() {
  return (
    <Switch> 
      <Route path="/register" render={() => <Register />} />
      <Route path="/login" render={() => <Login />} />
      <Route path='/add-property'>
        <AddProperty />
      </Route>
      <Route path='/'>
        <UserDashboard />
      </Route>
    </Switch>
  );

}

export default App;


