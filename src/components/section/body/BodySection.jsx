import React from 'react';

import TypingEffect from '../../hooks/TypingEffect';
import './bodySection.css';

const BodySection = () => {
  return (
    <div className='container grid'>
      <div className='grid_text'>
        <TypingEffect text={`utviklerToni, mellomnivå javascript utvikler`} />
      </div>
      <div className='img_border img'></div>
    </div>
  );
};

export default BodySection;
