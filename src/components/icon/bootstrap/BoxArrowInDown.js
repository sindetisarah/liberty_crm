import * as React from 'react';

function SvgBoxArrowInDown(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M3.5 6a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-2a.5.5 0 010-1h2A1.5 1.5 0 0114 6.5v8a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 14.5v-8A1.5 1.5 0 013.5 5h2a.5.5 0 010 1h-2z'
			/>
			<path
				fillRule='evenodd'
				d='M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z'
			/>
		</svg>
	);
}

export default SvgBoxArrowInDown;
