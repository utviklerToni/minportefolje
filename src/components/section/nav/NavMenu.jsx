import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import './NavMenu.css';

const NavMenu = () => {
  return (
    <Fragment>
      <Router>
        <section className='section'>
          <div className='header-section center_text_flex d_flex'>
            <div>
              <Link to='#' className='btn section_menu_btn_bRadius_hjem'>
                Home
              </Link>
            </div>
            <div>
              <Link to='#' className='btn'>
                About Me
              </Link>
            </div>
            <div>
              <Link to='#' className='btn section_menu_btn_bRadius_kontact'>
                My Projects
              </Link>
            </div>
          </div>
        </section>
      </Router>
    </Fragment>
  );
};

export default NavMenu;
