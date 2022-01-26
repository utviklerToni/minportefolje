import React from 'react';
import { Link } from 'react-router-dom';
import AboutMeCard from './AboutMeCard';

// import TypingEffect from '../../hooks/TypingEffect';
import './bodySection.css';

// const BodySection = () => {
//   return (
//     <div className='container grid'>
//       <div className='grid_text'>
//         <TypingEffect
//           text={`utviklerToni, en mellomnivå javascript utvikler`}
//         />
//       </div>
//       <div className='img_border img'></div>
//     </div>
//   );
// };

const BodySection = () => {
  return (
    <div className='container'>
      {/* profile image section */}
      <section>
        <div className='profile-border'>
          <div className='preview-image'></div>
          <header className='intro-text'>
            <div className='grid_intro-text'>
              <h2>Who am I ? </h2>
              <h3 className='who-am-i'>
                Hi, My name is Toni and I am a full stack web developer, I use
                JavaScript with MERN stack, I also work on Electron.js and
                develop linux desktop application. Electron.js is a framework
                which allows JavaScript developer to create cross platform
                applications.
              </h3>
            </div>
          </header>
        </div>
      </section>

      {/* about me mid section */}

      <hr className='horizontal_line' />
      <section className='about_me raised_card'>
        <h1 className='about_me-card '>About Me</h1>
        <div className='about_me-grid border-red'>
          <AboutMeCard />
        </div>
        <Link to='/prosjekt'>
          <button
            className='btn'
            style={{ borderRadius: '0.3rem', margin: '1rem' }}
          >
            show me more projects
          </button>
        </Link>
      </section>

      <hr className='horizontal_line' />
    </div>
  );
};

export default BodySection;
