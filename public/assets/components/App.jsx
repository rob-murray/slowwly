var DisplayBox = require('./DisplayBox.jsx'),
  InputForm = require('./InputForm.jsx');

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
    this.setState(data);
  },

  render: function() {
    var slowwlyUrl = this._slowwlyUrl();

    return (
      <div>
        <InputForm
          onInputChange={this.handleInputChange}
          delayTime={this.state.delayTime}
          url={this.state.url}
        />
        <DisplayBox url={slowwlyUrl} />
      </div>
    );
  },

  _slowwlyUrl: function() {
    return this.props.host + "/delay/" + this.state.delayTime + "/url/" + this.state.url;
  }
});

module.exports = App;
