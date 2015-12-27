MoviesPage = React.createClass({

	/**
	 * Render the add movie form if the user is logged in
	 * @return {object} html
	 */
	renderAddMovieForm() {
		if (Meteor.userId()) {
			return (
				<div className="container">
		      		<AddMovieForm />
		      	</div>
		    );
		} else {
			return (
				<div className="container">
					<p>Please <a href="/login">sign in</a> so you can rate movies!</p>
				</div>
			);
		}
	},

	/**
	 * Render the component
	 * @return {object} component
	 */
	render() {
		return (
			<div className="movies-page">
				{ this.renderAddMovieForm() }
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