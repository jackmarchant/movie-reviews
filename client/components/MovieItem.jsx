MovieItem = React.createClass({

	addRating() {
		let movieId = this.props.movie._id,
		movieRating = (this.props.movie.rating) ? this.props.movie.rating : 0;
		Movies.update(movieId, {
			$set: {rating: movieRating + 1}
		});
	},

	removeMovie() {
		Movies.remove(this.props.movie._id);
	},

	render() {
		let movie = this.props.movie;
		return (
			<li key={this.props.key}>
				<div className="title">
					{movie.title}
				</div> 
				<div className="rating">
					{movie.rating} votes
				</div>
				<span className="remove" onClick={this.removeMovie}>X</span>
				<div className="actions">
					<button onClick={this.addRating} className="addRating">Add Rating</button>
				</div>
			</li>
		);
	}
});