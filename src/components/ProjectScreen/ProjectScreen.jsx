import React, { Fragment } from 'react';

import './projectScreen.css';
import PSComponent from './PSComponent';

const ProjectScreen = () => {
  return (
    <Fragment>
      <PSComponent
        projectImgAlg={`login project img`}
        projectHeader={`Authentication with Redux`}
        projectLink={`https://bjornsbeersandbones.herokuapp.com/login`}
        projectDescriptionTitle={`About this project`}
        projectDescriptionParagraph={` A simple authetication using redux state management with
        React.js. Redux is a predictable state container for
        JavaScript apps. (Not to be confused with a WordPress
        framework – Redux Framework.) It helps you write applications
        that behave consistently, run in different environments
        (client, server, and native), and are easy to test. On top of
        that, it provides a great developer experience, such as live
        code editing combined with a time traveling debugger.`}
      />
      {/* <PSComponent /> */}
    </Fragment>
  );
};

export default ProjectScreen;
