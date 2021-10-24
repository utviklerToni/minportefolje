import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import './section.css';

const Section = () => {
  return (
    <Fragment>
      <Router>
        <section className='section'>
          <div className='header-section center_text_flex d_flex'>
            <div>
              <Link to='#' className='btn'>
                Home
              </Link>
            </div>
            <div>
              <Link to='#' className='btn'>
                About me
              </Link>
            </div>
            <div>
              <Link to='#' className='btn'>
                Contact
              </Link>
            </div>
          </div>
          <hr className='section_menu_bBorder' />
        </section>
      </Router>
    </Fragment>
  );
};

export default Section;
