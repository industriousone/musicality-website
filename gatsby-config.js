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
		{
			resolve: 'gatsby-plugin-favicon',
			options: {
				logo: './src/images/icon_512x512@2x.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false,
				},
			},
		},
	],
};
