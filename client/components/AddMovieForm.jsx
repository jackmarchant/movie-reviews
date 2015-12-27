AddMovieForm = React.createClass({

	getInitialState() {
		return {
			movieTitle: '',
			formMessage: 'Add your favourite movie so people can start voting on it',
		};
	},

	onTextChange(e) {
		let text = e.target.value;
		this.setState({
			movieTitle: text
		});
	},

	addMovie(e) {
		e.preventDefault();
		let _this = this;
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
			setTimeout(function() {
				_this.setState({
					formMessage: '',
				});
			}, 3000);
		}
		return false;
	},

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

	render() {
		return (
			<form onSubmit={this.addMovie} className="addMovieForm">
				<fieldset>
					{this.renderFormMessage()}
					<div className="form-group col-xs-8">
						<input type="text" name="movie-title" value={this.state.movieTitle} onChange={this.onTextChange} className="form-control" />
					</div>
					<div className="form-group col-xs-4">
						<button className="btn btn-default" onClick={this.addMovie}>Add Movie</button>
					</div>
				</fieldset>
			</form>
		);
	}
});