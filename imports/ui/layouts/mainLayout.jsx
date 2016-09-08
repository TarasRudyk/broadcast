import React from 'react';

export const mainLayout = ({content}) => (
	<div className="broadcast">
	<h2>Test</h2>
	<nav>
		<a href="/">Broadcast</a>
		<a href="/profile">Profile</a>
		<a href="/about">About owner</a>
	</nav>
	<main>
	 {content}
	</main>
  	</div>
)