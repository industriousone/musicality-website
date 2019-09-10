import React from 'react';

import Layout from '../components/layout';
import MainSection from '../components/mainSection';
import MailingListSignup from '../components/mailingList';

const IndexPage = () => (
	<Layout>
		<div className="front-page">
			<MainSection>
				<div style={{ textAlign: 'center' }}>
					<h2><b>Musicality has been discontinued.</b></h2>
					<h1><b>:-(</b></h1>
				</div>

				<p>
					&nbsp;
				</p>

				<p>
					You probably already heard about how Musicality had become a nights and weekends project. Sadly my nights and weekends are now rarely my own and the world waits for no one. Musicality is no longer working properly on the newest macOS or tvOS, or on the latest Electron, or with the current Spotify and Amazon Music sites, and I have no time to get it fixed.
				</p>

				<p>
					Knowing that something I made is so broken and not being able to do anything about it is painful. I gave it my best shot with what time I had, but I came up short.
				</p>

				<p>
					If you need to download the last version of Musicality, you can find it <a href="https://s3.us-east-2.amazonaws.com/share.industriousone.com/Musicality-3.1.14-b195.zip">here</a>. If you need to reach me, <a href="mailto:hello@industriousone.com">send me an email</a> or tweet at <a href="https://twitter.com/getmusicality">@getmusicality</a>.
				</p>

				<p>
					I&apos;ll still be listening to my music all day every day, so I&apos;m not ruling out a new (probably much simpler) version of Musicality in the future. If you&apos;d like to stay in the loop, drop your email in the form below and I&apos;ll keep you notified (only Musicality news; no spam ever).
				</p>

				<p>
					Rock on, my friends. I&apos;m glad you enjoyed Musicality all these years.
				</p>

				<MailingListSignup />
			</MainSection>
		</div>
	</Layout>
);

export default IndexPage;
