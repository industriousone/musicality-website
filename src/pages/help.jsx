import { Link, graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import ContentPage from '../components/contentPage';
import HelpRow from '../components/helpRow';

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
				facebook
				twitter
				email
			}
		}
	}
`;

const HelpPage = ({ data }) => (
	<Layout>
		<ContentPage title="Help">
			<h2>
				Musicality is <em>temporarily</em> unavailable.
			</h2>
			<p>
				See <Link to="/">this page</Link> for more information, or scroll down for
				the latest on the{' '}
				<Link to="/help#known-issues">known issues and fixes</Link>.
			</p>

			<h2 style={{ marginTop: '1.5em' }}>
				<b>
					<a name="general-questions">General Questions (and Answers!)</a>
				</b>
			</h2>

			<HelpRow title="How can I contact you?" slug="how-to-contact">
				<p>
					You can reach me on <a href={data.site.siteMetadata.twitter}>Twitter</a>,{' '}
					<a href={data.site.siteMetadata.facebook}>Facebook</a>, or{' '}
					<a href={`mailto:${data.site.siteMetadata.email}`}>via email</a>. I do
					my best to respond quickly and I&rsquo;m always happy to help!
				</p>
			</HelpRow>

			<HelpRow title="Where's the iOS remote control?" slug="where-is-ios-remote">
				<p>
					Musicality Remote is{' '}
					<a href="https://itunes.apple.com/us/app/musicality-remote/id840103636?ls=1&mt=8">
						available on the iTunes App Store
					</a>.
				</p>
			</HelpRow>

			<HelpRow title="Which services are supported?" slug="supported-services">
				<p>
					Musicality&rsquo;s audio streaming and volume controls work with
					<em>any</em> website. The built-in controls (play, pause, skip, etc.)
					and the song notifications require special support, and will only work
					with selected sites. Right now that list includes:
				</p>
				<table width="100%">
					<tbody>
						<tr>
							<td width="33%">
								<a href="http://8tracks.com">8tracks</a>
							</td>
							<td width="33%">
								<a href="https://music.amazon.com">Amazon</a>
							</td>
							<td width="33%">
								<a href="http://deezer.com">Deezer</a>
							</td>
						</tr>
						<tr>
							<td>
								<a href="http://www.fitradio.com/music">Fit Radio</a>
							</td>
							<td>
								<a href="https://www.focusatwill.com/">Focus@Will</a>
							</td>
							<td>
								<a href="https://play.google.com/music/listen">Google Play</a>
							</td>
						</tr>
						<tr>
							<td>
								<a href="http://jango.com">Jango</a>
							</td>
							<td>
								<a href="http://last.fm">Last.fm</a>
							</td>
							<td>
								<a href="http://mixcloud.com">MixCloud</a>
							</td>
						</tr>
						<tr>
							<td>
								<a href="http://napster.com">Napster</a>
							</td>
							<td>
								<a href="http://pandora.com">Pandora</a>
							</td>
							<td>
								<a href="http://radio.garden">Radio.garden</a>
							</td>
						</tr>
						<tr>
							<td>
								<a href="http://seeburg1000.com">Seeburg 1000</a>
							</td>
							<td>
								<a href="http://slacker.com">Slacker Radio</a>
							</td>
							<td>
								<a href="http://soundcloud.com">SoundCloud</a>
							</td>
						</tr>
						<tr>
							<td>
								<a href="http://play.spotify.com">Spotify</a>
							</td>
							<td>
								<a href="http://tunein.com">TuneIn Radio</a>
							</td>
							<td>
								<a href="https://www.youtube.com">YouTube</a>
							</td>
						</tr>
					</tbody>
				</table>
				<p>
					I will be adding more sites in future releases. Have a favorite
					you&rsquo;d like to see included? See{' '}
					<a href="#how-to-contact">How can I contact you?</a> above to let me
					know!
				</p>
			</HelpRow>

			<HelpRow title="Is there a Mac App Store version?" slug="mas-version">
				<p>
					Not at this time. I do hope to offer a Mac App Store version eventually,
					but there are a number of hoops I need to jump through before Apple will
					allow Musicality to be listed on their store.
				</p>
			</HelpRow>

			<HelpRow title="Do I have to install Flash?" slug="do-i-need-flash">
				<p>
					If you wish to use a music service that requires Flash (not many do
					these days), you will need to either{' '}
					<a href="https://get3.adobe.com/flashplayer/update/ppapiosx/">
						install Adobe&rsquo;s &ldquo;Pepper&rdquo; PPAPI Flash Player
					</a>{' '}
					<em>or</em>{' '}
					<a href="https://www.google.com/chrome/">download Google Chrome</a> to
					your Applications folder.
				</p>
			</HelpRow>

			<HelpRow title="Is there upgrade pricing?" slug="upgrade-pricing">
				<p>
					Yes! You can upgrade from earlier versions of Musicality or from the
					Muse Pandora Radio player for 25% off.
				</p>
			</HelpRow>

			<HelpRow title="I'm stuck on a website or station!" slug="stuck-on-station">
				<p>
					Musicality remembers the last website you visit and helpfully brings up
					back to it the next time you start. If you accidentally navigate to an
					unexpected page this might not feel so helpful. To get back to your
					music, choose <b>Go &gt; Go to Location</b> from the menu, enter the
					name of your desired music service (e.g. &lduo;Pandora&rdquo;) into the
					location box, and press Enter.
				</p>
				<p>
					I hope to make improvements to Musicality soon to make this more
					obvious.
				</p>
			</HelpRow>

			<h2 style={{ marginTop: '1.5em' }}>
				<b>
					<a name="known-issues">Known Issues</a>
				</b>
			</h2>

			<HelpRow
				title="Amazon Music says &ldquo;Playback Disabled&rdquo;!"
				slug="amazon-playback-disabled"
			>
				<p>
					Yup...not sure why it is throwing that up yet but will fix it if I can.
				</p>
			</HelpRow>

			<HelpRow
				title="Spotify doesn't play!"
				slug="spotify-dead-dead-dead"
			>
				<p>
					Spotify now requires a <a href="https://www.widevine.com">signed Widevine plugin</a> in
					order to play their content. I reached out to Widevine about getting a playback license and
					was told, in short, that I wasn&rsquo;t worth their time. Probably nowhere to go from there,
					but if I can come up with anything I will do my best.
				</p>
			</HelpRow>

			<HelpRow
				title="Streaming to AppleTV fails with &ldquo;403 Forbidden&rdquo;!"
				slug="atv4-403-forbidden"
			>
				<p>
					Apple made a change requiring an AirPlay password or passcode to be set
					before streaming will work. I almost have this working, but I&rsquo;m
					not quite there yet.
				</p>
			</HelpRow>

			<HelpRow
				title="The remote control layout is broken on iOS 12! (FIXED 🎉)"
				slug="remote-ios12"
			>
				<p>
					This is now fixed and available on the iOS App Store.
				</p>
			</HelpRow>

			<HelpRow
				title="Streaming to AirPort Express fails with &ldquo;403 Forbidden&rdquo; (FIXED 🎉)"
				slug="express-airplay2"
			>
				<p>
					This is now <em>fixed</em> in the <b>v3.1.7</b> release.{' '}
					<a href="#how-to-contact">Let me know</a> if you continue to have any
					problems! (Note that it is <em>not (yet)</em> fixed for the 4th
					generation Apple TV; working on that now).
				</p>
			</HelpRow>

			<HelpRow title="Pandora Plus isn't working! (FIXED 🎉)" slug="pandora-plus">
				<p>
					This is now <em>fixed</em> in the <b>v3.1.6</b> release.{' '}
					<a href="#how-to-contact">Let me know</a> if you continue to have any
					problems!
				</p>
			</HelpRow>

			<HelpRow
				title="Pandora won't play if left paused overnight! (FIXED 🎉)"
				slug="pandora-wont-play-after-sleep"
			>
				<p>
					This should be fixed in the <b>v3.1.6</b> release. If you are still
					experiencing this issue, <a href="#how-to-contact">let me know</a>! And
					in the meantime, choose <b>Go &gt; Reload</b> from the menu, or press{' '}
					<b>Command+R</b>, to reload the page and get the music playing again.
				</p>
			</HelpRow>

			<HelpRow
				title="I can't log in with Facebook (or Google or Twitter)!"
				slug="oauth-logins"
			>
				<p>
					This is{' '}
					<a href="https://github.com/electron/electron/issues/8100">
						an unfortunate current limitation of the Electron framework
					</a>{' '}
					on which Musicality is built. I am actively investigating a fix, but in
					the meantime:
				</p>
				<ul>
					<li>
						From the menu choose <b>Go &gt; Go to Location</b> to bring up the
						location bar.
					</li>
					<li>
						Navigate to the service that requires your login, i.e.
						&ldquo;facebook.com&rdquo;.
					</li>
					<li>Log in to the site.</li>
					<li>
						<b>Go &gt; Go to Location</b> again, and type the name of the music
						service you want to visit, i.e. &ldquo;spotify&rdquo;, and press{' '}
						<b>Enter</b>.
					</li>
					<li>
						Click on the &ldquo;Log in with Facebook&rdquo; button again, and you
						will be logged into the service.
					</li>
				</ul>
			</HelpRow>

			<HelpRow
				title="Slacker Radio&rsquo;s login leaves me at an empty window!"
				slug="slacker-login-empty-window"
			>
				<p>
					This is also{' '}
					<a href="https://github.com/electron/electron/issues/8100">
						an unfortunate current limitation of the Electron framework
					</a>{' '}
					on which Musicality is built. I am actively investigating a fix, but in
					the meantime:
				</p>
				<ul>
					<li>Go ahead and log in, and leave the empty window open.</li>
					<li>
						Click on main Musicality window, then press <b>Command+R</b> to reload
						the page.
					</li>
					<li>
						The authentication window will go away, and you will be logged in.
					</li>
				</ul>
			</HelpRow>
		</ContentPage>
	</Layout>
);

HelpPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default HelpPage;
