var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./pages/App');
var LoginPage = require('./pages/Login');
var MainPage = require('./pages/Main');
var PlayerPage = require('./pages/Player');
var GroupListPage = require('./pages/GroupList');

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={MainPage}/>
    <Route name="login" handler={LoginPage}/>
    <Route name="player" path="player/:id" handler={PlayerPage}/>
    <Route name="groupList" path="groups" handler={GroupListPage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('react'));
});
