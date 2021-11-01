import React from 'react';
import { Fragment } from 'react';

const AboutMeCard = () => {
  return (
    <Fragment>
      <div className='card'>
        <h3>what i do for a living</h3>
        <p>
          i am a full stack dev, I make web app on MERN stack, i also work on
          electron.js and i create apps for Linux, but can also be used in
          windows, electron.js is cross-platform
        </p>
        <li>
          <a href='github.com/utviklerToni'>github</a>
        </li>
      </div>
      <div className='card'>
        <h1>when i'm not coding</h1>
        <div>
          <h3>mostly exericse</h3>
          <p>
            i do plenty of exericse each do to avoid back, wrists, arm, neck
            inuries. the job as a developer is not very "physcially moving", so
            to keep myself fit and healthy i have to workout almost everyday
            30mins minimum.
          </p>
        </div>
      </div>

      <div className='card'>
        <h1>my projects</h1>
        <h3>list of projects i have done in past year</h3>

        <li>
          <a href='/'>map api using reactjs and mapbox</a>
        </li>
        <li>
          <a href='/'>login/register using react+redux</a>
        </li>
        <li>
          <a href='/'>blog using react {'&'} redux</a>
        </li>
      </div>
    </Fragment>
  );
};

export default AboutMeCard;
