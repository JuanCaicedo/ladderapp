var React = require('react');
var MatchActions = require('../actions/MatchActions');

var MatchNew = React.createClass({
  render: function() {
    var players = this.props.allPlayers;
    var options = [];

    for (var key in players) {
      options.push(<option key={players[key].id} value={players[key].id}>{players[key].name}</option>);
    }

    return (
      <div>
        <h2>Add Match</h2>
        <label>Winner</label>
        <select ref="winner">
          {options}
        </select>

        <label>Loser</label>
        <select ref="loser">
          {options}
        </select>

        <button type="button" onClick={this.handleSubmit}>Add Match</button>
      </div>
    )
  },

  handleSubmit: function(e) {
    e.preventDefault()
    var players = this.props.allPlayers;

    var ids = {
      winner: this.refs.winner.getDOMNode().value,
      loser: this.refs.loser.getDOMNode().value
    };

    var attrs = {
      winner: players[ids.winner],
      loser: players[ids.loser]
    }

    MatchActions.create(attrs);
  }
});

module.exports = MatchNew;