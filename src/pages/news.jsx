import React from 'react';

import '../styles/in-app-news.css';

import Logo from '../components/logo';
import AppStoreBadge from '../images/app-store-badge.svg';
import EmailIcon from '../images/email-96.png';
import FacebookIcon from '../images/facebook-96.png';
import IOSDeviceIcons from '../images/ios-devices.png';
import TwitterIcon from '../images/twitter-96.png';

const NewsPage = () => (
	<div className="news-page">
		<div className="intro">
			<Logo className="main-image" size="128" />
			<div>Welcome to</div>
			<h1>Musicality</h1>
		</div>

		<div className="main-content big">
			<p>
				Thanks for giving Musicality a try! Follow us for news, and feel free to
				get in touch if you have any questions!
			</p>

			<p className="image-row">
				<a
					href="https://www.facebook.com/industriousone"
					title="Follow us on Facebook"
				>
					<img src={FacebookIcon} width="48" height="48" alt="Facebook" />
				</a>
				<a
					href="https://twitter.com/getmusicality"
					title="Follow us on Twitter"
				>
					<img src={TwitterIcon} width="48" height="48" alt="Twitter" />
				</a>
				<a href="mailto:support@industriousone.com" title="Send us an email">
					<img src={EmailIcon} width="48" height="48" alt="Email" />
				</a>
			</p>

			<p>
				Be sure to check out{' '}
				<b>
					<a href="itms://itunes.apple.com/us/app/musicality-remote/id840103636?ls=1&mt=8">
						Musicality Remote
					</a>
				</b>{' '}
				for your iPhone or iPad, available for free on the iTunes App Store!
			</p>

			<p className="image-row">
				<a href="itms://itunes.apple.com/us/app/musicality-remote/id840103636?ls=1&mt=8">
					<img
						src={IOSDeviceIcons}
						width="79"
						height="72"
						alt="iOS device icons"
					/>
					<img src={AppStoreBadge} alt="Download on the App Store" />
				</a>
			</p>

			<p>
				You can return to this window at any time by choosing{' '}
				<b>Help&nbsp;&gt;&nbsp;Welcome…</b> from the menu. Enjoy!
			</p>
		</div>
	</div>
);

export default NewsPage;
