import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Register from './components/register/register';

import 'reset-css';
import './App.scss';

function App() {
	return (
		<div className="App">
			<h1>Airbnb Pricing Calculator</h1>
			<Route path="/register" render={() => <Register />} />
		</div>
	);
}

export default App;
