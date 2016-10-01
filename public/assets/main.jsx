var App = require('./components/App.jsx');
var container = document.getElementById('app');

React.render(
  <App host={container.dataset.host} />,
  container
);
