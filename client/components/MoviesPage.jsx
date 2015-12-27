MoviesPage = React.createClass({
	render() {
		return (
			<div className="movies-page">
				<div className="container">
		      		<AddMovieForm />
		      	</div>
		        <div className="container">
		        	<div className="heading">
						<div className="col-xs-6"><strong>Title</strong></div>
						<div className="col-xs-6 text-right"><strong>Avg. Rating</strong></div>
		            </div>
		            <MovieList />
		        </div>
		    </div>
		);
	}
});