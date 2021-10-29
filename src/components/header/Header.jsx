import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './header.css';

export const Header = () => {
  return (
    <Router>
      <header className='header_style'>
        <div className='container'>
          <div className='center_text'>
            <h3>welcome to my portfolio project</h3>
          </div>
          <Link to='/' className='btn header_btn_bRadius'>
            utviklerToni
          </Link>
        </div>
      </header>
    </Router>
  );
};
