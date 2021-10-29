import React from 'react';

import '../section/body/bodySection.css';
import './footer.css';

const Footer = () => {
  return (
    <div className='container'>
      <div className='about_me-grid'>
        <div>
          <h1>Comments !</h1>
          <p>
            If you wanna leave comment on my mini blog web app then follow the
            link below
          </p>
          <a href='/'>
            <button
              className='btn'
              style={{ borderRadius: '0.3rem', padding: '0.3rem' }}
            >
              miniBlog
            </button>
          </a>
        </div>
        <div className=''>
          <h1>Contact me</h1>
          <p>If you wanna contact me. use the link below</p>

          <a href='/'>
            <button
              className='btn'
              style={{ borderRadius: '0.3rem', padding: '0.3rem' }}
            >
              mail
            </button>
          </a>
        </div>

        <div>
          <h1>Social medias</h1>
          <p>I only use telegram for officially chat with my client</p>

          <a href='/'>
            {' '}
            <button
              className='btn'
              style={{ borderRadius: '0.3rem', padding: '0.3rem' }}
            >
              telegram
            </button>
          </a>
        </div>
      </div>

      <div className='flex '>
        <p>utviklerToni - open source | 2021 </p>
      </div>
    </div>
  );
};

export default Footer;
