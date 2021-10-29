import React from 'react';

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
                my alias goes as utviklerToni and i am a full stack web dev, i
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
          <div className='card'>
            <h3>what i do for a living</h3>
            <p>
              i am a full stack dev, I make web app on MERN stack, i also work
              on electron.js and i create apps for Linux, but can also be used
              in windows, electron.js is cross-platform
            </p>
            <li>
              <a href='github.com/utviklerToni'>github</a>
            </li>
          </div>
          <div className='card'>
            <h1>when i'm not coding</h1>
            <div>
              <h3>mostly exericse</h3>
              <p>
                i do plenty of exericse each do to avoid back, wrists, arm, neck
                inuries. the job as a developer is not very "physcially moving",
                so to keep myself fit and healthy i have to workout almost
                everyday 30mins minimum.
              </p>
            </div>
          </div>

          <div className='card'>
            <h1>my projects</h1>
            <h3>list of projects i have done in past year</h3>

            <li>
              <a href='/'>map api using reactjs and mapbox</a>
            </li>
            <li>
              <a href='/'>login/register using react+redux</a>
            </li>
            <li>
              <a href='/'>blog using react {'&'} redux</a>
            </li>
          </div>
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
