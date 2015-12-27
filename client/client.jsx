Meteor.startup(function () {
  console.log('hello there');
  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render(<App />, document.getElementById("app-container"));
});