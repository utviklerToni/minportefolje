import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
         <Header />
         <NavMenu />
         <Routes>
            {/* <main> */}
            <Route path='/minportefolje' exact element={<HomePage />} />
            <Route path='/prosjekt' exact element={<ProjectScreen />} />
            <Route path='/about_me' element={<AboutMe />} />
            <Route path='/coming_soon' element={<ComingSoon />} />
            {/* </main> */}
         </Routes>
         <FooterBanner />
      </div>
   );
};

export default App;
