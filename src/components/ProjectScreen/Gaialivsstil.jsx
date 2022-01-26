import React, { Fragment } from 'react';
import GaialivsstilLogo from '../../assets/icon-svg/GaialivsstilLogo';
import MainPageImageCard from './GaialivsstilComponents/MainPageImageCard';

import './container_gaialivsstil.css';
import ServicePageImageCard from './GaialivsstilComponents/ServicePageImageCard';
import HomePageImage from './GaialivsstilComponents/HomePageImage';

const Gaialivsstil = (props) => {
  return (
    <Fragment>
      <div className='container_gaialivsstil'>
        <div className='top-margin raised-card-project flexbox_project'>
          <h1 style={{ padding: '1rem' }} className='ss-text'>
            <span>My first project</span>
            <br />
            <br />
            <GaialivsstilLogo />
            <p>Gaialivsstil</p>
          </h1>

          <div>
            <div className='flexbox_project'>
              <img
                src={props.projectImage}
                alt={props.projectImgAlt}
                className='project-img-shadow img-width-gaialivsstil'
              />
            </div>
          </div>
        </div>
        <div className='about_me'>
          {/* grid card 1 */}
          <div className='about_me-grid'>
            <div className='about_me raised_card'>
              <div className='story_text'>
                <h1>Landing Page</h1>
              </div>

              <HomePageImage />
              <h3
                style={{
                  fontWeight: '600',
                  color: '#FF7B26',
                }}
              >
                Never been so proud of my selection
              </h3>
              <p>
                When I began working on this project, the very first problem I
                faced was "What should the website look like".
                <br />I was very fortunate to start a project with no foundation
                other than what the services is gonna be. At the same time it
                was a very interesting challenge.
                <br /> But thanks to open source community and thanks to
                <span>
                  <a
                    href='https://www.pexels.com/@therato'
                    target={'_blank'}
                    rel={`noreferrer`}
                    style={{
                      fontWeight: '600',
                      color: '#FF7B26',
                    }}
                  >
                    {' '}
                    Mr Stein Egil Liland,{' '}
                  </a>
                </span>
                I found the perfect image that I was looking for. Give Mr.
                Liland a visit if you love photography.
              </p>
            </div>

            {/* grid card 2*/}
            <div className='about_me raised_card'>
              <div className='story_text'>
                <h1>What Inspired Me</h1>
              </div>
              <MainPageImageCard />
              <h3
                style={{
                  fontWeight: '600',
                  color: '#FF7B26',
                }}
              >
                The quotes, The images
              </h3>
              <p>
                Since this was my new and very first dip in the world of wed
                developement, I had some real challenges discovering my true
                potential.
                <br />
                But thank fully I had my client's full support and when I felt
                most cornered during the desing of this very front page(landing
                page), I turned to my client for help, ironically. And my client
                helped me with the image selections and the quotes on the tile
                you see here as well as on the other pages as well.
              </p>
            </div>

            {/* grid card 3 */}
            <div className='about_me raised_card'>
              <div className='story_text'>
                <h1>Never Settled For Less</h1>
              </div>
              <ServicePageImageCard />
              <h3
                style={{
                  fontWeight: '600',
                  color: '#FF7B26',
                }}
              >
                Mobile view
              </h3>
              <p>
                Let's be honest, there is no web application 100% finished if a
                developer doesn't make it fit for mobile and tablets.
                <br />
              </p>
            </div>
          </div>
          <div>
            <button className='btn'>Explore Gaialivsstil</button>
          </div>
          <hr className='horizontal_line' />
        </div>
      </div>
    </Fragment>
  );
};

export default Gaialivsstil;
