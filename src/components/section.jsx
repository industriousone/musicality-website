import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ className, children }) => (
	<section className={className}>
		<div className="content">{children}</div>
	</section>
);

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Section.defaultProps = {
	className: null,
};

export default Section;
