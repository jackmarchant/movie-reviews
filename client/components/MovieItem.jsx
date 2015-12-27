MovieItem = React.createClass({
	
	/**
	 * Add a rating to the movie
	 * @return {void}
	 */
	addRating() {
		let movieId = this.props.movie._id,
		movieRating = (this.props.movie.rating) ? this.props.movie.rating : 0;
		Movies.update(movieId, {
			$set: {rating: movieRating + 1}
		});
	},
	
	/**
	 * Remove this movie
	 * @return {void}
	 */
	removeMovie() {
		Movies.remove(this.props.movie._id);
	},
	
	/**
	 * Render number of votes text based on the number of votes,
	 * written in grammatically correct format
	 * @return string text number of votes
	 */
	renderVotes() {
		let rating = this.props.movie.rating;
		if (!rating) rating = 0;
		let votesTxt = (rating === 1) ? rating + ' vote' : rating + ' votes';
		return votesTxt;
	},
	
	/**
	 * Check if a user is logged in
	 * @return {bool}
	 */
	loggedInUser() {
		return (Meteor.userId()) ? true : false;
	},
	
	/**
	 * Render actions for this movie item
	 * @return {object} html
	 */
	renderActions() {
		if (this.loggedInUser()) {
			return (
				<div className="actions">
					<button onClick={this.addRating} className="btn btn-success">Add Rating</button>
					<button onClick={this.removeMovie} className="btn btn-danger">Remove Movie</button>
				</div>
			);
		} else {
			return null;
		}
	},
	
	/**
	 * Render this component
	 * @return object html
	 */
	render() {
		let movie = this.props.movie;
		return (
			<li key={this.props.key}>
				<div className="title">
					{movie.title}
				</div> 
				<div className="rating">
					{this.renderVotes()}
				</div>
				{ this.renderActions() }
			</li>
		);
	}

});