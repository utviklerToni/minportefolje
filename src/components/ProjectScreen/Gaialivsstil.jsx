import React, { Fragment } from 'react';
import GaialivsstilLogo from '../../assets/icon-svg/GaialivsstilLogo';
import MainPageImageCard from './GaialivsstilComponents/MainPageImageCard';

import './container_gaialivsstil.css';
import ServicePageImageCard from './GaialivsstilComponents/ServicePageImageCard';
import HomePageImage from './GaialivsstilComponents/HomePageImage';

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
				<div className='about_me'>
					{/* grid card 1 */}
					<div className='about_me-grid'>
						<div className='about_me raised_card'>
							<div>
								<h1>My life changing break</h1>
							</div>

							<HomePageImage />
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
								reiciendis rem laudantium, odit aperiam officia reprehenderit
								nobis porro! Nostrum saepe fugiat quas excepturi quibusdam
								sapiente dicta eaque aspernatur vel animi.
							</p>
						</div>

						{/* grid card 2*/}
						<div className='about_me raised_card'>
							<div>
								<h1>What inspired me</h1>
							</div>
							<MainPageImageCard />

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
								molestias labore rerum enim itaque possimus quibusdam
								consequuntur quod! Cumque culpa provident rerum inventore,
								explicabo itaque ad hic in animi aut.
							</p>
						</div>

						{/* grid card 3 */}
						<div className='about_me raised_card'>
							<div>
								<h1>Never gave up</h1>
							</div>
							<ServicePageImageCard />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
								molestias labore rerum enim itaque possimus quibusdam
								consequuntur quod! Cumque culpa provident rerum inventore,
								explicabo itaque ad hic in animi aut.
							</p>
						</div>
					</div>
					<hr className='horizontal_line' />
				</div>
			</div>
		</Fragment>
	);
};

export default Gaialivsstil;
