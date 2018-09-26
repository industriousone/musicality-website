import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Section from './section';
import { NavBar, NavItem } from './navbar';
import Logo from '../components/logo';

const Header = ({ title }) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
		}
		render={data => (
			<div className="header">
				<Helmet title={data.site.siteMetadata.title + ' - ' + title} />
				<Section className="navigation">
					<a href="/">
						<Logo className="badge" size="32" />
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
					<h1>
						<Link to="/">Musicality</Link> &gt; {title}
					</h1>
				</Section>
			</div>
		)}
	/>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
