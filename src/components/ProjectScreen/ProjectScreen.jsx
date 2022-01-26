import React, { Fragment } from 'react';

import PSComponent from './PSComponent';
import signIn from '../../assets/images/signIn.webp';
import bbbsHomePage from '../../assets/images/bbbs-mainpage-scaled04.webp';
import homepagePic1 from '../../assets/images/homepage-fullhd.webp';
// import mobileGaialivsstil from '../../assets/images/mobileGaialivsstil.webp';
import Gaialivsstil from './Gaialivsstil';

const ProjectScreen = () => {
  return (
    <Fragment>
      <Gaialivsstil projectImage={homepagePic1} />

      <PSComponent
        projectImage={bbbsHomePage}
        projectImgAlt={`image`}
        projectHeader={`A restaurant project for Gaialivsstil`}
        projectLink={`https://bjornsbeersandbones.herokuapp.com`}
        projectLinkDescription={`Live demo here`}
        projectDescriptionTitle={`About this project`}
        projectDescriptionParagraph={` A simple restaurant website using React.js & redux state management with Node.js at the backend. Its a project for my client to support local organic farmers and serve their local community. This restaurant is set to open in beautiful town of Kragerø. It is one of the ongoing project I've been working on. The goal is to make it scalable using micro-service so it can be scaled. Right now I have developed it as a monolithic web-app.`}
      />
      <PSComponent
        projectImage={signIn}
        projectImgAlt={`login project img`}
        projectHeader={`Authentication with Redux`}
        projectLink={`https://bjornsbeersandbones.herokuapp.com/login`}
        projectLinkDescription={`Click here to try`}
        projectDescriptionTitle={`About this project`}
        projectDescriptionParagraph={` A simple authetication using redux state management with React.js. Redux is a predictable state container for
        JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native)	, and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.`}
      />
    </Fragment>
  );
};

export default ProjectScreen;
