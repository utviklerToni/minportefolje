import React from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from '../../assets/icon-svg/GithubLogo';
import Mail from '../../assets/icon-svg/Mail';

import '../Section/Body/bodySection.css';
import './footer.css';

const Footer = () => {
  // const showMail = (event) => {
  // 	event.preventDefault();
  // };

  return (
    <div className='container'>
      <div className='about_me-grid'>
        <div className='raised_card footer-card-color'>
          <h1>Comments !</h1>
          <br />
          <p className='font-roboto'>
            Got thoughts to share or just wanna bully me online, May be you got
            jokes to share, head to my mini blog app and leave comments. I
            support free speech but I would request you keep the comments nice
            and clean.
          </p>
          <br />
          <Link to='/coming_soon'>
            <button
              className='btn'
              style={{
                borderRadius: '0.3rem',
                padding: '0.3rem',
                fontWeight: '400',
              }}
            >
              miniBlog - coming soon
            </button>
          </Link>
        </div>
        <div className='raised_card footer-card-color'>
          <h1>Contact me</h1>
          <br />
          <p className='font-roboto'>
            In case if you would like to contact me or leave a suggestion.
            Please use the e-mail below.
          </p>
          <br />
          <button
            className='btn'
            style={{
              borderRadius: '0.3rem',
              padding: '0.3rem',
              fontWeight: '400',
            }}
          >
            <Mail />
          </button>
          {/* <br />
          <a href='https://github.com/utviklertoni'>My github profile</a> */}

          <button
            className='btn'
            style={{
              borderRadius: '0.3rem',
              padding: '0.3rem',
              fontWeight: '400',
            }}
          >
            <GithubLogo />
          </button>
        </div>

        <div className='raised_card footer-card-color'>
          <h1>Social medias</h1>
          <br />
          <p className='font-roboto'>I don't use any social media </p>
          <br />
          <button
            className='btn'
            style={{
              borderRadius: '0.3rem',
              padding: '0.3rem',
              fontWeight: '400',
            }}
          >
            None
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
