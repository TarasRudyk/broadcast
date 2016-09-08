import React from 'react';
import {mount} from 'react-mounter';

import {mainLayout} from '../../ui/layouts/mainLayout';
import Broad from '../../ui/pages/broadcast';
import Profile from '../../ui/pages/profile';
import About from '../../ui/pages/about';

FlowRouter.route('/', {
	action() {
		mount(mainLayout, {
			content: (<Broad />)
		})
	}
});

FlowRouter.route('/profile', {
	action() {
		mount(mainLayout, {
			content: (<Profile />)
		})
	}
});

FlowRouter.route('/about', {
	action() {
		mount(mainLayout, {
			content: (<About />)
		})
	}
});