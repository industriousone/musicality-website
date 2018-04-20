import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => <div className="root">{children}</div>;

Page.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Page;

export const query = graphql`
	fragment pageData on RootQueryType {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
