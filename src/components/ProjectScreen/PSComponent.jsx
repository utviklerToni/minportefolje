import React from 'react';

import './projectScreen.css';

const PSComponent = (props) => {
  return (
    <div className='container'>
      <div className='top-margin'>
        <div className='raised-card-project'>
          <div className='flexbox_project'>
            <div className='para-space'>
              <h1>{props.projectHeader}</h1>
              <div>
                <a href={props.projectLink} className='btn_project'>
                  {props.projectLinkDescription}
                </a>
              </div>
              <div>
                <h1>{props.projectDescriptionTitle}</h1>
                <p className='desc-font para-space'>
                  {props.projectDescriptionParagraph}
                </p>
              </div>
            </div>
            <img
              src={props.projectImage}
              alt={props.projectImgAlt}
              className='project-img-shadow'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSComponent;
