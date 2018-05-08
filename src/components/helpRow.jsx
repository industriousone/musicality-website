import React from 'react';
import PropTypes from 'prop-types';

const HelpRow = ({ title, slug, children }) => (
	<div className="faq-row">
		<h3 className="faq-question">
			<a name={slug}>{title}</a>
		</h3>
		<div className="faq-answer">{children}</div>
	</div>
);

HelpRow.propTypes = {
	title: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	children: PropTypes.node,
};

HelpRow.defaultProps = {
	children: null,
};

export default HelpRow;
