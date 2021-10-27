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
                Hjem
              </Link>
            </div>
            <div>
              <Link to='#' className='btn'>
                Om Meg
              </Link>
            </div>
            <div>
              <Link to='#' className='btn section_menu_btn_bRadius_kontact'>
                Kontact
              </Link>
            </div>
          </div>
        </section>
      </Router>
    </Fragment>
  );
};

export default NavMenu;
