import React from 'react';

const Gaialivsstil = (props) => {
	return (
		<div>
			<div className='container'>
				<h1 className='bottom-border center'>My first React.js project</h1>
				<div className='top-margin'>
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
		</div>
	);
};

export default Gaialivsstil;
