import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
   return (
      <Fragment>
         <section className='section'>
            <div className='header-section center_text_flex d_flex'>
               <div>
                  <Link
                     to='/'
                     className='btn section_menu_btn_bRadius_hjem'
                  >
                     Home
                  </Link>
               </div>
               <div>
                  <Link to='about_me' className='btn'>
                     About Me
                  </Link>
               </div>
               <div>
                  <Link
                     to='/prosjekt'
                     className='btn section_menu_btn_bRadius_kontact'
                  >
                     My Projects
                  </Link>
               </div>
            </div>
         </section>
      </Fragment>
   );
};

export default NavMenu;
