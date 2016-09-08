import React, {Component} from 'react';

export default class BroadcastList extends Component {
	
	deleteBroadcast(){
		Meteor.call('deleteBroadcast', this.props.broadcast._id)
	}

	render(){
		return(
			<li>
				{this.props.broadcast.message}
				{this.props.broadcast.complete.toString()}
				{this.props.broadcast.createdAt.toISOString().substring(0, 10)}
				{this.props.broadcast.createdAt.toTimeString().substring(0, 5)}
				<button className="btn-del" onClick={this.deleteBroadcast.bind(this)}>
					Delete
				</button>	

			</li>
		)
	}
}