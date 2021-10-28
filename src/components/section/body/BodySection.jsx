import React from 'react';

import './bodySection.css';
import TypingEffect from '../../hooks/TypingEffect';

const BodySection = () => {
  return (
    <div className='profile_section'>
      <div className='img_border'>
        <h1>___</h1>
      </div>
      <div>
        <h3>
          <TypingEffect text={'who am i : utvkilerToni'} />
        </h3>

        <TypingEffect text={'utviklerToni ønsker deg velkommen'} />
      </div>
    </div>
  );
};

export default BodySection;
