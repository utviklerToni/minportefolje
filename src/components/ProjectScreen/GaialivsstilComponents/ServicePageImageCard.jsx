import React from 'react';

import servicePageImage from '../../../assets/images/service-page(480px).webp';

const ServicePageImageCard = () => {
	return (
		<div>
			<img
				src={servicePageImage}
				alt={`showcase-img`}
				style={{ width: '100%' }}
				className='card'
			/>
		</div>
	);
};

export default ServicePageImageCard;
