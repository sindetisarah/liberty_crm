import React from 'react';
import { useMeasure } from 'react-use';
import classNames from 'classnames';

const Footer = () => {
	const [ref, { height }] = useMeasure();

	const root = document.documentElement;
	root.style.setProperty('--footer-height', `${height}px`);


	return (
		<footer ref={ref} className='footer navbar-fixed-bottom' style={{ bottom: 0, }}>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<span className='fw-light'></span>
					</div>
					<div className='col-auto'>
						<a
							href='/'
							className={classNames('text-decoration-none',)}>
							<small className='fw-bold text-dark'> Call us for free on: <a style={{
								"color": "black"
							}} href="tel:+254-080-072-1042">0800721042</a>


							</small>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
