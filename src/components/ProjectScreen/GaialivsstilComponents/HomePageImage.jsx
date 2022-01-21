import React from 'react';

import heroImageGaialivsstil from '../../../assets/images/homepage-fullhd.webp';

const HomePageImage = () => {
	return (
		<div>
			<img
				src={heroImageGaialivsstil}
				alt={`showcase-img`}
				style={{ width: '100%' }}
				className='card'
			/>
		</div>
	);
};

export default HomePageImage;
