import React from 'react';

const Gaialivsstil = (props) => {
	return (
		<div>
			<div className='container'>
				<div className='top-margin'>
					<div className='raised-card-project'>
						<h3 style={{ padding: '1rem' }} className='ss-text'>
							Gaialivsstil: My first React.js project
						</h3>
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
		</div>
	);
};

export default Gaialivsstil;
