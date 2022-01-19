import React, { Fragment } from 'react';
import GaialivsstilLogo from '../../assets/icon-svg/GaialivsstilLogo';
import MainPageImageCard from './GaialivsstilComponents/MainPageImageCard';

import './container_gaialivsstil.css';

const Gaialivsstil = (props) => {
	return (
		<Fragment>
			<div style={{ border: '1px solid red' }}>
				<div className='container_gaialivsstil'>
					<div className='top-margin raised-card-project flexbox_project'>
						<h1 style={{ padding: '1rem' }} className='ss-text'>
							<span>My first project</span>
							<br />
							<br />
							<GaialivsstilLogo />
							<p>Gaialivsstil</p>
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
					<div className='about_me raised_card'>
						<div className='about_me-grid'>
							<div className=''>
								<MainPageImageCard />
								<div>
									<h1>test title</h1>
								</div>
							</div>

							<div className='card'>
								<h1>What inspired me</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
									molestias labore rerum enim itaque possimus quibusdam
									consequuntur quod! Cumque culpa provident rerum inventore,
									explicabo itaque ad hic in animi aut.
								</p>
							</div>

							<div className='card'>
								<h1>How i made it</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
									molestias labore rerum enim itaque possimus quibusdam
									consequuntur quod! Cumque culpa provident rerum inventore,
									explicabo itaque ad hic in animi aut.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Gaialivsstil;
