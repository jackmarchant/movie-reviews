MovieList = React.createClass({

	mixins: [ReactMeteorData],

	getMovies() {
		return Movies.find({},{ sort: {rating: -1} }).fetch();
	},

	getMeteorData() {
		return {
			movies: this.getMovies()
		}
	},

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