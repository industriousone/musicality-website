import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import '../styles/index.css';

const Layout = ({ children }) => (
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
			<div className="root">
				<Helmet title={data.site.siteMetadata.title} />
				{children}
			</div>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
