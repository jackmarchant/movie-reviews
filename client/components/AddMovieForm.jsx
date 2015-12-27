AddMovieForm = React.createClass({
	
	/**
	 * Get initial state of this component
	 * @return {object} accessed via this.state
	 */
	getInitialState() {
		return {
			movieTitle: '',
			formMessage: 'Add your favourite movie so people can start voting on it',
		};
	},
	
	/**
	 * Handle change of text of the movie title input field
	 * @param  {event} e event of keydown
	 * @return {void}
	 */
	onTextChange(e) {
		let text = e.target.value;
		this.setState({
			movieTitle: text
		});
	},
	
	/**
	 * Add a movie via submission of the form
	 * @param {event} e event
	 */
	addMovie(e) {
		e.preventDefault();
		if (this.state.movieTitle == '') {
			this.setState({
				formMessage: 'Sorry, you\'ll need to enter a movie title to add a new movie',
			});
		} else {
			Movies.insert({
				createdAt: new Date(),
				title: this.state.movieTitle
			});
			this.setState({
				movieTitle: '',
				formMessage: 'Success. New movie has been added. Now add your rating',
			});
			this.clearFormMessage();
		}
		return false;
	},
	
	/**
	 * Clear the form message from being displayed
	 * @return {void}
	 */
	clearFormMessage() {
		let _this = this; // private this variable
		setTimeout(function() {
			_this.setState({
				formMessage: '',
			});
		}, 3000);
	},
	
	/**
	 * Render the form message
	 * @return {object} html
	 */
	renderFormMessage() {
		let message = this.state.formMessage;
		if (message != '') {
			return (
				<div className="message" ref="formMessage">
					<p>{message}</p>
				</div>
			);
		} else {
			return null;
		}
	},
	
	/**
	 * Render the component
	 * @return {object} html
	 */
	render() {
		return (
			<form onSubmit={this.addMovie} className="addMovieForm">
				<fieldset>
					{this.renderFormMessage()}
					<div className="container no-padding-left">
						<div className="form-group col-xs-10">
							<input type="text" name="movie-title" value={this.state.movieTitle} onChange={this.onTextChange} className="form-control" />
						</div>
						<div className="form-group col-xs-2">
							<button className="btn btn-success" onClick={this.addMovie}>Add Movie</button>
						</div>
					</div>
				</fieldset>
			</form>
		);
	}
	
});