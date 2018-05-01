import React from 'react';

const MailingList = () => (
	<div className="mailing-list-signup">
		<form
			action="https://industriousone.us11.list-manage.com/subscribe/post?u=7c08609045df60d399cf238ac&amp;id=e5b587ecf6"
			method="post"
			target="_blank"
		>
			<input
				type="email"
				defaultValue=""
				name="EMAIL"
				className="email"
				placeholder="email address"
				required
			/>
			<input
				type="text"
				name="b_7c08609045df60d399cf238ac_3e720496a7"
				tabIndex="-1"
				value=""
				style={{ position: 'absolute', left: '-5000px' }}
				aria-hidden="true"
			/>
			<input
				type="submit"
				value="Subscribe"
				name="subscribe"
				className="submit"
			/>
		</form>
	</div>
);

export default MailingList;
