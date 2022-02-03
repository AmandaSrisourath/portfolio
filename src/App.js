import './App.css';
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
import Home from './pages/home/index';
import AboutMe from './pages/Infos/AboutMe';
import Projects from './pages/projects/index';
import Infos from './pages/Infos/index';
import SkillsAndSoftwares from './pages/skills & softwares/index';

function App() {
  	return (
    	<Router>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/aboutMe" element={<AboutMe/>}/>
				<Route path="/infos" element={<Infos/>}/>
				<Route path="/projects" element={<Projects/>}/>
				<Route path="/skills-softwares" element={<SkillsAndSoftwares/>}/>
			</Routes>
		</Router>
	)
}

export default App;