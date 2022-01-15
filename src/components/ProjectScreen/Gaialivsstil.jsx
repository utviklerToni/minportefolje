import React, { Fragment } from 'react';

import './container_gaialivsstil.css';

const Gaialivsstil = (props) => {
	return (
		<Fragment>
			<div className='container_gaialivsstil'>
				<div className='top-margin'>
					<h3 style={{ padding: '1rem' }} className='ss-text'>
						My first project: Gaialivsstil
					</h3>
					<div className='raised-card-project'>
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
