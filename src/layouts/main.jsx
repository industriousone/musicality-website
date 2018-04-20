import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Page from '../components/page';
import Footer from '../components/footer';

import '../styles/index.css';

const Layout = ({ children, data }) => (
	<Page>
		<Helmet title={data.site.siteMetadata.title} />
		{children()}
		<Footer />
	</Page>
);

Layout.propTypes = {
	children: PropTypes.func.isRequired,
	data: PropTypes.shape({}).isRequired,
};

export default Layout;

export const query = graphql`
	query MainLayoutQuery {
		...pageData
	}
`;
