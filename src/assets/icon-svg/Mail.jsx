import { Fragment } from 'react';

const Mail = () => {
	return (
		<Fragment>
			<div style={{ display: 'flex' }}>
				<svg
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 16 16'
					height='16px'
					width='16px'>
					<title>mail</title>
					<path d='M0 3v12h16V3.004h-.004V3zm1 1.003h14v2.173L8.002 9.878 1 6.175zM15 7.3V14H1V7.301L8.002 11z'></path>
					<path d='M1 4.003h14V14H1z' opacity='.2'></path>
				</svg>
				<p style={{ marginLeft: '9px', color: '#ff7b00' }}>
					{' '}
					h1de.toni@protonmail.com
				</p>
			</div>
		</Fragment>
	);
};

export default Mail;
