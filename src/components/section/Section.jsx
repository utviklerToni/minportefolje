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
                Hjem
              </Link>
            </div>
            <div>
              <Link to='#' className='btn'>
                Om Oss
              </Link>
            </div>
            <div>
              <Link to='#' className='btn'>
                Kontact
              </Link>
            </div>
          </div>
          
        </section>
      </Router>
    </Fragment>
  );
};

export default Section;
