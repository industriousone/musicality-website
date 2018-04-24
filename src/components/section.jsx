import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ className, children }) => (
	<section className={className}>
		<div className="content">{children}</div>
	</section>
);

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

Section.defaultProps = {
	className: null,
	children: null,
};

export default Section;
