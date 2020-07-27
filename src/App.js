import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import 'reset-css';
import './styles/App.scss';

//components
import UserDashboard from './components/UserDashboard';
import AddProperty from './components/AddProperty';

function App() {
  return (
    <Switch> 
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


