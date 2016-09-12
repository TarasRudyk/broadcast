import React, {Component} from 'react';

export default class BroadcastList extends Component {
	
	deleteBroadcast(){
		Meteor.call('deleteBroadcast', this.props.broadcast._id)
	}

	render(){
		return(
			<li>
				
				  <div className="section">
				    <h3 className="message truncate"><strong>{this.props.broadcast.message}</strong></h3>
				    <p className="broadcastList">
				    <em>
				    Post was made: 
				    <span>{this.props.broadcast.createdAt.toISOString().substring(0, 10)}</span>
				    @
				    <span>{this.props.broadcast.createdAt.toTimeString().substring(0, 5)}</span>
				    </em>
				    </p>
				    <p className="broadcastList"><em>Location: {this.props.broadcast.location.toString()}</em></p>
					  <button className="waves-effect waves-light btn btn-del" onClick={this.deleteBroadcast.bind(this)}>
							Delete
						</button>
				  </div>

			</li>
		)
	}
}