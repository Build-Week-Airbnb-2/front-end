import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import 'reset-css';
import './styles/App.scss';

//components
import UserDashboard from './components/UserDashboard';
import AddProperty from './components/AddProperty';
import Register from './components/register/register';
import Login from './components/Login/components/Log';
import PrivateRoute from './components/PrivateComponent';


function App() {
  return (
    <div>
    <Link to='/login'>Login </Link>
    <Link to='/register'>register </Link>
    <Link to='/'>home</Link>
    <Link to='/add-property'>add property</Link>
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


