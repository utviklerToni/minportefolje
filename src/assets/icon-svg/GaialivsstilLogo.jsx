import React from 'react';

import gaialivsstilLogo from '../../assets/finished-logo.png';

const GaialivsstilLogo = (props) => {
	return (
		<div>
			<img
				src={gaialivsstilLogo}
				alt={`img`}
				style={{
					maxWidth: '18vw',
				}}
			/>
		</div>
	);
};

export default GaialivsstilLogo;
