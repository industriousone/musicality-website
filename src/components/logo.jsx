import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../images/icon-banner.png';

const Logo = ({ className, size }) => (
	<img
		className={className}
		src={Icon}
		alt="Musicality"
		width={size}
		height={size}
	/>
);

Logo.propTypes = {
	className: PropTypes.string,
	size: PropTypes.number.isRequired,
};

Logo.defaultProps = {
	className: null,
};

export default Logo;
