import React, { useLayoutEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

const PageWrapper = forwardRef(({ title, description, className, children, bgcolor }, ref) => {
	<Helmet>
		<title>{title + ` | ` + process.env.REACT_APP_SITE_NAME}</title>
		<meta name={description} content={process.env.REACT_APP_META_DESC} />
	</Helmet>

	return (
		<div ref={ref} className={classNames('page-wrapper', 'container-fluid', className)} style={{ backgroundColor: bgcolor }}>
			{children}
		</div>
	);
});
PageWrapper.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
PageWrapper.defaultProps = {
	title: null,
	description: null,
	className: null,
};

export default PageWrapper;
