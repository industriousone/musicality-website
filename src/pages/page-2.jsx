import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../components/contentPage';

const SecondPage = () => (
	<ContentPage title="Page 2">
		<h1>Hi from the second page</h1>
		<p>Welcome to page 2</p>
		<Link to="/">Go back to the homepage</Link>
	</ContentPage>
);

export default SecondPage;
