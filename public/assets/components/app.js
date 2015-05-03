var SlowwlyUrl = require('./slowwly_url');
var InputForm = require('./input_form');

var App = React.createClass({
  propTypes: {
    host : React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      host : "http://slowwly.robertomurray.co.uk"
    };
  },

  getInitialState: function() {
    return {
      delayTime: 3000,
      url: "http://www.google.co.uk"
    };
  },

  handleInputChange: function(data) {
    // TODO dont think the state should be 'copied' like this - needs better design -
    //  but lets get this out the door
    this.setState(data);
  },

  slowwlyUrl: function() {
    return this.props.host + "/delay/" + this.state.delayTime + "/url/" + this.state.url;
  },

  render: function() {
    return (
      <div>
        <InputForm onInputChange={this.handleInputChange} defaultDelay={this.state.delayTime} defaultUrl={this.state.url} />
        <SlowwlyUrl url={this.slowwlyUrl()} />
      </div>
    );
  }
});

module.exports = App;
