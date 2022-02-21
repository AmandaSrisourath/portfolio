import './App.css';
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
import Home from './pages/home/index';
import Infos from './pages/infos/index';
import Projects from './pages/projects/components/index';
import Skills from './pages/skills/index';

function App() {
  	return (
    	<Router>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/infos" element={<Infos/>}/>
				<Route path="/projects" element={<Projects/>}/>
				<Route path="/skills" element={<Skills/>}/>
			</Routes>
		</Router>
	)
}

export default App;