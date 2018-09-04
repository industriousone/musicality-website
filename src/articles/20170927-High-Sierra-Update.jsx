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
			<div>What's new in</div>
			<h1>Musicality</h1>
		</div>

		<div className="main-content">
			<h3>Musicality and macOS 10.13 High Sierra</h3>

			<br />

			<p>
				Musicality does <em>not</em> currently work with Apple's latest version of macOS.
				Audio interception is broken, which prevents Musicality's volume and AirPlay controls
				from working as intended. If those features are important to you, avoid upgrading
				macOS for now.
			</p>

			<p>
				(I'm running High Sierra myself, so I can't AirPlay my own music until I find a fix.)
			</p>

			<p>
				Feel free to get in touch with any questions or feedback!
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

		</div>
	</div>
);

export default NewsPage;
