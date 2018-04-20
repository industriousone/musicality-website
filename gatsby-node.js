exports.onCreatePage = async ({ page, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	return new Promise(resolve => {
		switch (page.path) {
			case '/':
				page.layout = 'main';
				break;

			default:
				page.layout = 'secondary';
				break;
		}

		createPage(page);
		resolve();
	});
};
