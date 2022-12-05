import React, { Fragment } from 'react';

import '../Gaialivsstil/container_gaialivsstil.css';
import './gaia-v2.css';
import quoteImage from '../../../assets/images/new-Gaialivsstil/Quotes.png';
import { Link } from 'react-router-dom';

const GaialivsstilV2 = (props) => {
   return (
      <Fragment>
         <div className='dark-bg'>
            <div className='container_gaialivsstil head-img_container'>
               <div className='title_container'>
                  <h1 className='bold_title'>
                     Gaialivsstil, renovation & a colorful Forum
                  </h1>
                  <p className='color-orange-para'>
                     Desgined & Developed by{' '}
                     <span className='dev-title'>TONI K.</span>
                  </p>
               </div>
               <img
                  src={props.projectImage}
                  alt={props.projectImgAlt}
                  className='img-width-gaialivsstil'
               />
            </div>
         </div>
         <div className='white-bg'>
            <div className='container_gaialivsstil head-img_container'>
               <img src={quoteImage} alt='' style={{ width: '45vw' }} />
               <div className='title_container'>
                  <h1 className='semi-bold_title'>Not a boring FORUM</h1>
                  <p className='color-para'>
                     Colorful & fun forum experience to make user's interaction
                     playful.
                  </p>
                  <br />
                  <Link to={`/prosjekt/Gaialivsstil-v1.2/details`}>
                     <h4 className='learn-link'>Learn More</h4>
                  </Link>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default GaialivsstilV2;
