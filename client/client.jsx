// React Router dependencies
const {Router, Route} = ReactRouter;
const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

// startup meteor page
Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render((
    <Router history={history}>
      <Route path="/" component={App}>
      	<Route path="login" component={Login} />
      	<Route path="movies" component={MoviesPage} />
      </Route>
    </Router>
  ), document.getElementById('app-container'));
});