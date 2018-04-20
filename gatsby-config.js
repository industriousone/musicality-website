module.exports = {
	siteMetadata: {
		title: 'Musicality',
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
