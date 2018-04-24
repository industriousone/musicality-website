import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';
import { NavBar, NavItem } from './navbar';

const Header = ({ title }) => (
	<Section className="header">
		<NavBar>
			<NavItem to="/">Home</NavItem>
			<NavItem to="/help">Help</NavItem>
			<NavItem to="/download" className="button">
				Download
			</NavItem>
		</NavBar>
		<h1>{title}</h1>
	</Section>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
