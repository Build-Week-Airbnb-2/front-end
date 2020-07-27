import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Register from './components/register/register'


import 'reset-css';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Route exact path="/" render={() => <h1>Home Component</h1>}></Route>
      <Route path="/register" render={() => <Register></Register>}></Route>
		</div>
	);
}

export default App;
