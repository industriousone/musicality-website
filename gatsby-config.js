module.exports = {
	siteMetadata: {
		title: 'Musicality',
		facebook: 'https://www.facebook.com/industriousone',
		twitter: 'https://twitter.com/getmusicality',
		email: 'hello@industriousone.com',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/styles/typography.js',
			},
		},
	],
};
