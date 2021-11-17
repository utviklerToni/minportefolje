import React, { Fragment } from 'react';

import PSComponent from './PSComponent';
import signIn from '../../assets/signIn.png';
import bbbsHomePage from '../../assets/bbbs-mainpage-scaled04.png';
import homepagePic1 from '../../assets/homepage-fullhd.webp';
import mobileGaialivsstil from '../../assets/mobileGaialivsstil.webp';
import Gaialivsstil from './Gaialivsstil';

const ProjectScreen = () => {
	return (
		<Fragment>
			<Gaialivsstil projectImage={homepagePic1} />
			<PSComponent
				projectImage={mobileGaialivsstil}
				projectHeader={`mobile view screenshot of Gaialivsstil`}
				projectLink={`https://gaialivsstil.no/`}
				projectLinkDescription={`Click here to try`}
				projectDescriptionTitle={`About this project`}
			/>
			<PSComponent
				projectImage={signIn}
				projectImgAlt={`login project img`}
				projectHeader={`Authentication with Redux`}
				projectLink={`https://bjornsbeersandbones.herokuapp.com/login`}
				projectLinkDescription={`Click here to try`}
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

			<PSComponent
				projectImage={bbbsHomePage}
				projectImgAlt={`image`}
				projectHeader={`A small restaurant project for Gaialivsstil`}
				projectLink={`https://bjornsbeersandbones.herokuapp.com`}
				projectLinkDescription={`Show me the live demo`}
				projectDescriptionTitle={`About this project`}
				projectDescriptionParagraph={` A simple restaurant website using React.js & redux state management with Node.js at the backend. Its a small project for my client to support local organic farmers and serve local community. This restaurant will open in the beautiful town of Kragerø. It is one of the ongoing project I've been working on. The goal is to make it scalable using micro-service so it can be scaled. Since its not been launched, I have created it as a monolithic web-app.`}
			/>
		</Fragment>
	);
};

export default ProjectScreen;
