import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Section from './section';

const Header = ({ title }) => (
	<Section className="header">
		<h1>
			<Link to="/">{title}</Link>
		</h1>
	</Section>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
