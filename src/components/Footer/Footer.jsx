import React from 'react';

import '../Section/Body/bodySection.css';
import './footer.css';

const Footer = () => {
  const showMail = (event) => {
    event.preventDefault();
  };

  return (
    <div className='container'>
      <div className='about_me-grid'>
        <div>
          <h1>Comments !</h1>
          <p>
            If you wanna leave comment on my mini blog web app then follow the
            link below
          </p>

          <button
            className='btn'
            style={{ borderRadius: '0.3rem', padding: '0.3rem' }}
          >
            miniBlog
          </button>
        </div>
        <div className=''>
          <h1>Contact me</h1>
          <p>
            In case if you would like to contact me or leave a suggestion or
            report a bug , use the e-mail below
          </p>

          <button
            className='btn'
            style={{ borderRadius: '0.3rem', padding: '0.3rem' }}
            onClick={showMail}
          >
            mail
          </button>
        </div>

        <div>
          <h1>Social medias</h1>
          <p>I only use telegram for officially chat with my client</p>

          <button
            className='btn'
            style={{ borderRadius: '0.3rem', padding: '0.3rem' }}
          >
            telegram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
