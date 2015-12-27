MovieList = React.createClass({
	
	// Meteor data
	mixins: [ReactMeteorData],
	
	/**
	 * Get all movies sorted in rating ordered most to least
	 * @return {object} movies
	 */
	getMovies() {
		return Movies.find({},{ sort: {rating: -1} }).fetch();
	},

	/**
	 * Get data from meteor database
	 * @return {object} meteor data accessed through this.data
	 */
	getMeteorData() {
		return {
			movies: this.getMovies()
		}
	},
	
	/**
	 * Render this component
	 * @return {object} html
	 */
	render() {
		let movies;
		if (this.data.movies) {
			movies = this.data.movies.map(function(movie, i) {
				return (
					<MovieItem key={i} movie={movie} />
				);
			});
		}
		if (movies) {
			return (
				<div className="movie-list">
					<ul>
			          {movies}
					</ul>
				</div>
			);
		} else {
			return <p>Could not find any movies. Try adding some.</p>
		}
	}
	
});