var React = require('react');
var LeaderBoard = require('../components/LeaderBoard');
var MatchNew = require('../components/MatchNew');
var MatchList = require('../components/MatchList');
var PlayerNew = require('../components/PlayerNew');
var PlayerStore = require('../stores/PlayerStore');
var MatchStore = require('../stores/MatchStore');

function getAppState() {
  return {
    allPlayers: PlayerStore.getAllSortedByWins(),
    allMatches: MatchStore.getLast(5)
  };
}

var LadderApp = React.createClass({

  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    PlayerStore.addChangeListener(this._onChange);
    MatchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PlayerStore.removeChangeListener(this._onChange);
    MatchStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="ladderapp">
        <LeaderBoard allPlayers={this.state.allPlayers}/>
        <MatchNew allPlayers={this.state.allPlayers}/>
        <PlayerNew/>
        <MatchList allMatches={this.state.allMatches}/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getAppState());
  },

});

module.exports = LadderApp;