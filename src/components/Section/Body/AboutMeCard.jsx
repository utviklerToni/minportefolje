import React from 'react';
import { Fragment } from 'react';

const AboutMeCard = () => {
   return (
      <Fragment>
         <div className='card'>
            <h2>Me as a developer</h2>
            <hr className='hr_color' />
            <ul>
               <li>
                  <p>
                     I am a full stack dev, I create web app on MERN stack, I
                     also work on electron.js so I can create open source
                     applications for Linux community. Since open source
                     community has given me so much that I have ever expected
                  </p>
               </li>
               <li>
                  <p>
                     Recently, I have had a glimpse of Qt and how impressive it
                     is for cross platform application. Since I love cross
                     platform framework so much I have finally decided to get
                     started with Qt. So you can expect some new projects on Qt
                     very soon.
                  </p>
               </li>
            </ul>
         </div>

         <div className='card'>
            <h1>Me as a Human Being</h1>
            <div>
               <hr className='hr_color' />
               <ul>
                  <li>
                     <p>
                        I am a self taught cook. One of the things I like to do
                        when I am not working with JavaScript is to learn
                        different dishes and recipes from every corner of the
                        planet.
                     </p>
                  </li>
                  <li>
                     <p>
                        I wouldn't call myself a professional photographer but I
                        do love taking pictures of wilderness and the nature
                        around me. I just can't resist nature, wherever I go my
                        first desire is to capture the nature around me. I think
                        nature deserves our attention since we are a part of it.
                     </p>
                  </li>
               </ul>
            </div>
         </div>

         <div className='card'>
            <h1>Work</h1>
            <hr className='hr_color' />
            <ul>
               <li>
                  <h3>
                     <a
                        href='https://gaialivsstil.no/'
                        className='bottom-border'
                     >
                        Gaialivsstil
                     </a>
                  </h3>
               </li>

               <li>
                  <h3>
                     <a
                        href='https://utviklertoni.github.io/BBBs/'
                        className='bottom-border'
                     >
                        Bjorns Beers & Bones
                     </a>
                     <p>A fictional site showing off my UI design skills</p>
                  </h3>
               </li>

               <li>
                  <h3>
                     <a
                        href='https://utviklertoni.github.io/ferryFUN/'
                        className='bottom-border'
                     >
                        ferry&Fun
                     </a>
                     <p>A fictional site showing off my UI design skills</p>
                  </h3>
               </li>
            </ul>
         </div>
      </Fragment>
   );
};

export default AboutMeCard;
