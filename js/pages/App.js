var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({

  render: function() {
    return (
      <div className="router">
        <RouteHandler/>
      </div>
    );
  }

});

module.exports = App;
