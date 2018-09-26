import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import MainSection from '../components/mainSection';
import MailingListSignup from '../components/mailingList';
import Logo from '../components/logo';

const IndexPage = () => (
	<Layout>
		<div className="front-page">
			<MainSection>
				<div style={{ textAlign: 'center' }}>
					<Logo size="256" />
					<h3>
						Musicality is <em>temporarily</em> unavailable.
					</h3>
				</div>

				<p>
					Musicality is a nights-and-weekends passion project for
					me&mdash;I&apos;d love to do it full time, but that&apos;s not quite a
					reality yet.
					<span role="img" aria-label="face with wide open eyes">
						😳
					</span>
				</p>

				<p>
					I fell behind the recent flurry of changes to macOS, tvOS, and the music
					services, and the{' '}
					<Link to="/help">list of known issues</Link> got away from
					me. I wasn&apos;t feeling good about the state of things, so I decided
					to stop offering Musicality for sale until I could get things working to
					my satisfaction again.
				</p>

				<p>
					The good news:{' '}
					<em>I&apos;m really close to having everything working again.</em>
				</p>

				<p>
					If you would like to try things out for yourself, there is a{' '}
					<Link to="/download">free trial available</Link>...just be sure to check
					the <Link to="/help">known issues</Link> first! If you
					purchased Musicality already, and just need to download the latest
					version, you can <Link to="/download">find it here</Link>.
				</p>

				<p>
					If you would like to receive <em>very occasional</em> updates on
					Musicality, drop your email address into the form below and I&apos;ll
					notify you when everything is up and running properly again. (No spam,
					and I&apos;ll never share your address. Promise.)
				</p>

				<MailingListSignup />

				<p>
					If you have questions, feel free to{' '}
					<a href="mailto:hello@industriousone.com">send me an email</a>. See you
					soon!
				</p>
			</MainSection>
		</div>
	</Layout>
);

export default IndexPage;
