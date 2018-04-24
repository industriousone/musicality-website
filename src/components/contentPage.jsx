import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import MainSection from './mainSection';

const ContentPage = ({ children, title }) => (
	<div className="content-page">
		<Header title={title} />
		<MainSection>{children}</MainSection>
		<Footer />
	</div>
);

ContentPage.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string.isRequired,
};

ContentPage.defaultProps = {
	children: null,
};

export default ContentPage;
