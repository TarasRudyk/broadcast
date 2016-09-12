import React from 'react';
import AccountUI from '../components/accountUI'

export const mainLayout = ({content}) => (
	<div className="broadcast">
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo right">Test</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="/">Broadcast</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/about">About owner</a></li>
        <li><AccountUI /></li>
      </ul>
    </div>
  </nav>
		<main>
		 {content}
		</main>
  </div>
)



