import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const NavItem = ({ className, children, to }) => (
	<li className={className}>
		<Link to={to}>{children}</Link>
	</li>
);

NavItem.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	to: PropTypes.string,
};

NavItem.defaultProps = {
	className: null,
	to: '/',
};

const NavBar = ({ className, children }) => (
	<navbar className={className}>
		<ul>{children}</ul>
	</navbar>
);

NavBar.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

NavBar.defaultProps = {
	className: null,
};

export { NavBar, NavItem };
