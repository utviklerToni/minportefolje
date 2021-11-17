import React from 'react';

import '../Section/Body/bodySection.css';
import './footer.css';

const Footer = () => {
	const showMail = (event) => {
		event.preventDefault();
	};

	return (
		<div className='container'>
			<div className='about_me-grid'>
				<div>
					<h1>Comments !</h1>
					<p>
						Got thoughts to share or just wanna bully me online, May be you got
						jokes to share, head to my mini blog app and leave comments. I
						support free speech but I would request you keep the comments nice
						and clean.
					</p>

					<button
						className='btn'
						style={{ borderRadius: '0.3rem', padding: '0.3rem' }}>
						miniBlog - coming soon
					</button>
				</div>
				<div className=''>
					<h1>Contact me</h1>
					<p>
						In case if you would like to contact me or leave a suggestion or
						report a bug , use the e-mail below
					</p>

					<button
						className='btn'
						style={{ borderRadius: '0.3rem', padding: '0.3rem' }}
						onClick={showMail}>
						h1de.toni@protonmail.com
					</button>
				</div>

				<div>
					<h1>Social medias</h1>
					<p>I don't use any social media </p>
					<button
						className='btn'
						style={{ borderRadius: '0.3rem', padding: '0.3rem' }}>
						None
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
