import React from 'react';

import signIn from '../../assets/signIn.png';

const PSComponent = (props) => {
  return (
    <div className='container'>
      <div className='top-margin'>
        <div className='raised-card-project'>
          <div className='flexbox_project'>
            <div className=''>
              <h1>{props.projectHeader}</h1>
              <div>
                <a
                  href={props.projectLink}
                  // href='#'
                  className='btn_project'
                >
                  Click here to try
                </a>
              </div>
              <div>
                <h1>{props.projectDescriptionTitle}</h1>
                <p className='desc-font'>{props.projectDescriptionParagraph}</p>
              </div>
            </div>
            <img src={signIn} alt={props.projectImgAlg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSComponent;
