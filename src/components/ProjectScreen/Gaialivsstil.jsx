import React, { Fragment } from 'react';
import GaialivsstilLogo from '../../assets/icon-svg/GaialivsstilLogo';

import './container_gaialivsstil.css';

const Gaialivsstil = (props) => {
	return (
		<Fragment>
			<div className='container_gaialivsstil'>
				<div className='top-margin raised-card-project flexbox_project'>
					<h1 style={{ padding: '1rem' }} className='ss-text'>
						<span>My first project</span>
						<br />
						<br />
						<GaialivsstilLogo />
						<h3>Gaialivsstil</h3>
					</h1>

					<div>
						<div className='flexbox_project'>
							<img
								src={props.projectImage}
								alt={props.projectImgAlt}
								className='project-img-shadow img-width-gaialivsstil'
							/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Gaialivsstil;
