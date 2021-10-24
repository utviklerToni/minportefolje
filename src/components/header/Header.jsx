import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './header.css';

export const Header = () => {
  return (
    <Router>
      <header className='header_style'>
        <div className='container'>
          <div className='center_text'>
            <h3>Velkommen</h3>
          </div>
          <Link to='/' className='btn'>
            utviklerToni
          </Link>
        </div>
      </header>
    </Router>
  );
};
