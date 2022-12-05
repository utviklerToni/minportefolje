import React from 'react';

import summaryImage from '../../../../assets/images/new-Gaialivsstil/Summary.png';

import '../gaia-v2.css';
import './ProjectDetail.css';

const ProjectDetailV2 = () => {
   return (
      <div className='container'>
         <div className='none-bg'>
            <div className='container_gaialivsstil head-img_container'>
               <img src={summaryImage} alt='' style={{ width: '45vw' }} />
            </div>
            <div className='desc-para'>
               <div className='para-width'>
                  <p>
                     Creating a website which suits the audience, keeps them
                     engage and has the modern tools under its layer is
                     important for any web application. But most forums are
                     plain, simple and doesnt provokes audience in fun and
                     colorful way. LIFE IS ALL ABOUT MIXING COLORS.
                  </p>
                  <br />
                  <p>
                     I had this challenge to reach a group of audience who are
                     adult & mature. I lead the design & development to create a
                     forum to allow users to keep engaged and give them a fun
                     experience.
                  </p>
               </div>
               <div className='role'>
                  <h3>MY ROLE</h3>
                  <h2>
                     Lead Developer, UI-Designer, Interaction designer, Color
                     research, Testing,
                  </h2>
               </div>
            </div>
         </div>

         <br />
         <a
            href={`https://gaialivsstil.no/`}
            className='btn'
            style={{ borderRadius: '45px' }}
            target={'_blank'}
            rel='noreferrer'
         >
            Experience Gaialivsstil
         </a>
      </div>
   );
};

export default ProjectDetailV2;
