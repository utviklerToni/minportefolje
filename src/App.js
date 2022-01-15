import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ProjectScreen from './components/ProjectScreen/ProjectScreen';
import NavMenu from './components/Section/Nav/NavMenu';
import FooterBanner from './components/Footer/FooterBanner';
import ComingSoon from './components/ComingSoon/ComingSoon';

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<NavMenu />
				<main>
					<Route path='/' exact component={HomePage} />
					<Route path='/prosjekt' exact component={ProjectScreen} />
					<Route path='/about_me' component={AboutMe} />
					<Route path='/coming_soon' component={ComingSoon} />
				</main>
				<div className='container'>
					<FooterBanner />
				</div>
			</Router>
		</div>
	);
};

export default App;
