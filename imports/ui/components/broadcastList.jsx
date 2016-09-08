import React, {Component} from 'react';

export default class BroadcastList extends Component {
	render(){
		return(
			<li>
				{this.props.broadcast.message}
				{this.props.broadcast.complete.toString()}
			</li>
		)
	}
}