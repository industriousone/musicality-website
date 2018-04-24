import React from 'react';
import PropTypes from 'prop-types';

import Section from '../components/section';

const MainSection = ({ children }) => (
	<Section className="main">{children}</Section>
);

MainSection.propTypes = {
	children: PropTypes.node,
};

MainSection.defaultProps = {
	children: null,
};

export default MainSection;
