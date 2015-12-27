// App component - represents the whole app
App = React.createClass({
 
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  /**
   * Initial state of the app
   * @return object
   */
  getInitialState() {
    return {
    }
  },
 
  /**
   * Loads items from Meteor database
   */
  getMeteorData() {
    return {
    };
  },

  /**
   * Render the react component
   * @return DOM node
   */
  render() {
    return (
      <div className="wrapper">
      	<div className="container">
      		<h1 className="text-center">Movies</h1>
      	</div>
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
});