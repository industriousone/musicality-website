import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/index.css';

const Layout = ({ children, data }) => (
	<div className="root">
		<Helmet title={data.site.siteMetadata.title} />
		{children()}
	</div>
);

Layout.propTypes = {
	children: PropTypes.func.isRequired,
	data: PropTypes.shape({}).isRequired,
};

export default Layout;

export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
