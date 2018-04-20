import React from 'react';
import Link from 'gatsby-link';

import Section from '../components/section';

const SecondPage = () => (
	<Section className="main">
		<h1>Hi from the second page</h1>
		<p>Welcome to page 2</p>
		<Link to="/">Go back to the homepage</Link>
	</Section>
);

export default SecondPage;
