import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './header.css';

export const Header = () => {
  return (
    <Router>
      <div className='flex header'>
        <div>
          <Link to='/' className='btn'>
            utviklerToni
          </Link>
        </div>
        <div>
          <button className='btn' type='submit'>
            logginn
          </button>
        </div>
      </div>
    </Router>
  );
};
