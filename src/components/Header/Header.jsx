import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './header.css';

const Header = () => {
	return (
		<Router>
			<header className='header_style'>
				<div className=' header_flex_smallscreen'>
					<div className='center_text header_text_style'>
						<h3>Welcome to my portfolio project</h3>
					</div>
				</div>
			</header>
		</Router>
	);
};

export default Header;
