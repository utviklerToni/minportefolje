import React from 'react';
import { Fragment } from 'react';

const AboutMeCard = () => {
  return (
    <Fragment>
      <div className='card'>
        <h2>Me as a developer</h2>
        <hr className='hr_color' />
        <p>
          I am a full stack dev, I make web app on MERN stack, i also work on
          electron.js and I create apps for Linux using Electron.js which is a
          cross platform framework
        </p>
        <ul>
          <li>
            <a href='https://www.github.com/utviklerToni'>github</a>
          </li>
        </ul>
      </div>
      <div className='card'>
        <h1>When i'm not coding</h1>
        <div>
          <hr className='hr_color' />
          <p>
            I do plenty of exericse each do to avoid back, wrists, arm, neck
            inuries. The job as a developer is not very "physcially moving", so
            to keep myself fit and healthy I have to workout almost everyday
            30mins minimum.
          </p>
        </div>
      </div>

      <div className='card'>
        <h1>My favorite projects</h1>
        <hr className='hr_color' />
        <ul>
          <li>
            <h3>
              <a href='/'>Mapbox api using React.js</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href='/'>Login/Register</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href='https://bjornsbeersandbones.herokuapp.com/'>
                Bjorns Beers & Bones
              </a>
            </h3>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default AboutMeCard;
