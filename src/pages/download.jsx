import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import ContentPage from '../components/contentPage';
import Section from '../components/section';
import Logo from '../components/logo';

import releaseInfo from '../../data/release-info.json';

const DownloadPage = () => (
	<Layout>
		<ContentPage title="Download">
			<Section className="download-not-available">
				<h2>Musicality is not currently available for purchase.</h2>
				<p>
					See <Link to="/">this page</Link> for more information.
				</p>
			</Section>
			<Section className="download-instructions">
				<p>
					Your download should start in just a moment.{' '}
					<a href={releaseInfo.download}>Retry</a> if it doesn&rsquo;t.
				</p>
				<p>
					<a href={releaseInfo.download}>
						<Logo size="128" />
					</a>
				</p>
				<p>
					<i>
						Simply drag Musicality from your <b>Downloads</b> folder to{' '}
						<b>Applications</b> and enjoy!
					</i>
				</p>
				{process.env.ACTIVE_ENV === 'production' && (
					<iframe
						title="downloader"
						width="1"
						height="1"
						frameBorder="0"
						src={releaseInfo.download}
					/>
				)}
			</Section>
		</ContentPage>
	</Layout>
);

export default DownloadPage;
