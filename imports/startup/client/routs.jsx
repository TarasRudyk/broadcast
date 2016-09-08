import React from 'react';
import {mount} from 'react-mounter';

import {mainLayout} from '../../ui/layouts/mainLayout'
import App from '../../ui/App.jsx'

FlowRouter.route('/', {
	action() {
		mount(mainLayout, {
			content: (<App />)
		})
	}
});