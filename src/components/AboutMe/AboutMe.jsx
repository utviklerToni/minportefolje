import React from 'react';

import './aboutMe.css';

const AboutMe = () => {
	return (
		<div style={{ height: '50vh' }}>
			<div
				className='raised_card aboutMe'
				style={{ backgroundColor: '#1D3A41' }}>
				<h1>About me</h1>
				<p>
					I am a full stack dev, I make web app on MERN stack, I also work on
					electron.js and I create apps for Linux using Electron.js which is a
					cross platform framework
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
