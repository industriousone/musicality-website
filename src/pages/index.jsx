import React from 'react';
import Link from 'gatsby-link';

import MainSection from '../components/mainSection';
import MailingListSignup from '../components/mailingList';

import Icon from '../images/icon_banner.png';

const IndexPage = () => (
	<div className="front-page">
		<MainSection>
			<div style={{ textAlign: 'center' }}>
				<img src={Icon} alt="Musicality" width="256" height="256" />
				<h3>Musicality is not currently available.</h3>
			</div>

			<p>
				Musicality is a nights-and-weekends passion project for me&mdash;but
				unfortunately my nights and weekends haven&apos;t been quite enough to
				keep up with all of the recent changes in macOS, tvOS, and the music
				services. As a result, the{' '}
				<Link to="/help#known-issues">list of known issues</Link> has grown, and
				I no longer feel good about offering Musicality up for sale, even with
				the free trial.
			</p>

			<p>
				I&apos;m making steady progress on the fixes, but until I feel better
				about the state of things I&apos;ve decided to turn off the website. If
				you&apos;d like, drop your email address into the form below and
				I&apos;ll notify you when everything is up and running properly again.
				(No spam, and I&apos;ll never share your address. Promise.)
			</p>

			<MailingListSignup />

			<p>
				<strong>If you already purchased Musicality, never fear!</strong> I will
				still be releasing updates and fixes as soon as they are available. If
				you have questions, feel free to{' '}
				<a href="mailto:hello@industriousone.com">send me an email</a>.
			</p>

			<p>
				If you purchased Musicality already, and just need to download the
				latest version, you can <Link to="/download">find it here</Link>.
			</p>
		</MainSection>
	</div>
);

export default IndexPage;
