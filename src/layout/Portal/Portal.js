import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Portal = ({ id, children }) => {
	const mount = document.getElementById(id);
	return ReactDOM.createPortal(children, mount);
};
Portal.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
};
Portal.defaultProps = {
	id: 'portal-root',
};

export default Portal;
