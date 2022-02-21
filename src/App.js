import './App.css';
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
import Home from './pages/home';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-F4GZFE8HJ8";
ReactGA.initialize(TRACKING_ID);

function App() {
  	return (
    	<Router>
			<Routes>
				<Route path="*" element={<Home/>}/>
			</Routes>
		</Router>
	)
}

export default App;