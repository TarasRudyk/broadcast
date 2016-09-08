import React from 'react';
import AccountUI from '../components/accountUI'

export const mainLayout = ({content}) => (
	<div className="broadcast">
	<h2>Test</h2>
	<nav>
		<a href="/">Broadcast</a>
		<a href="/profile">Profile</a>
		<a href="/about">About owner</a>
		<AccountUI />
	</nav>
	<main>
	 {content}
	</main>
  	</div>
)