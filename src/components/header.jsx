import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';
import { NavBar, NavItem } from './navbar';

import Icon from '../images/icon_banner.png';

const Header = ({ title }) => (
	<div className="header">
		<Section className="navigation">
			<a href="/">
				<img className="badge" src={Icon} alt="Musicality" />
			</a>
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
