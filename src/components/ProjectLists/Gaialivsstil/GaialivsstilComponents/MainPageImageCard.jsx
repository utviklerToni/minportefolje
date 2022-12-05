import React from 'react';

import homePageImageCard from '../../../../assets/images/homepage-2(__480px).webp';

const MainPageImageCard = () => {
	return (
		<div>
			<img
				src={homePageImageCard}
				alt={`showcase-img`}
				style={{ width: '100%' }}
				className='card'
			/>
		</div>
	);
};

export default MainPageImageCard;
