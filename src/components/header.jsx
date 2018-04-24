import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';
import { NavBar, NavItem } from './navbar';

const Header = ({ title }) => (
	<div className="header">
		<Section className="navigation">
			<NavBar>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/help">Help</NavItem>
				<NavItem to="/download" className="button">
					Download
				</NavItem>
			</NavBar>
		</Section>
		<Section className="title">
			<h1>{title}</h1>
		</Section>
	</div>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
