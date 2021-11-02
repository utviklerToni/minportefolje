import React from 'react';
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
              <h3>
                My alias goes as utviklerToni and i am a full stack web dev, i
                use js with MERN stack, i also work on electron.js and develop
                linux desktop app......
              </h3>
            </div>
          </header>
        </div>
      </section>

      {/* about me mid section */}

      <hr className='horizontal_line' />
      <section className='about_me raised_card'>
        <h1 className='about_me-card '>about Me</h1>
        <div className='about_me-grid border-red '>
          <AboutMeCard />
        </div>
        <button
          className='btn'
          style={{ borderRadius: '0.3rem', margin: '1rem' }}
        >
          show me more projects
        </button>
      </section>

      <hr className='horizontal_line' />
    </div>
  );
};

export default BodySection;
