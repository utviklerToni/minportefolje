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
import ProjectDetailV2 from './components/ProjectLists/Gaialivsstil-V2/ProjectDetail/ProjectDetailV2';

const App = () => {
   return (
      <div>
         <Header />
         <NavMenu />
         <Routes>
            {/* <main> */}
            <Route path='/' exact element={<HomePage />} />
            <Route path='/prosjekt' exact element={<ProjectScreen />} />
            <Route path='/about_me' element={<AboutMe />} />
            <Route path='/coming_soon' element={<ComingSoon />} />
            <Route
               path='/prosjekt/Gaialivsstil-v1.2/details'
               element={<ProjectDetailV2 />}
            />

            {/* </main> */}
         </Routes>
         <FooterBanner />
      </div>
   );
};

export default App;
