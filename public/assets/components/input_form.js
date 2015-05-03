
var InputForm = React.createClass({
  getInitialState: function() {
    return {
      selectedDelay: this.props.defaultDelay,
      url: "https://www.google.com"
    };
  },

  handleDelayChange: function(e) {
    e.preventDefault();
    var delay = e.currentTarget.valueAsNumber
    this.setState({selectedDelay: delay});
    this.props.onInputChange({url: this.state.url, delayTime: delay});

    return;
  },

  handleUrlChange: function(e) {
    e.preventDefault();
    var url = e.currentTarget.value;
    if (!url) {
      return;
    }
    this.props.onInputChange({url: url, delayTime: this.state.selectedDelay});

    return;
  },

  delayInSeconds: function() {
    return this.state.selectedDelay / 1000
  },

  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <input ref="redirect_url" placeholder="http://google.com" id="redirect_url" type="text" className="validate" onChange={this.handleUrlChange} />
        </div>
        <div className="input-field col s4">
            <input type="range" id="delay_time" min="0" max="10000" step="100" onInput={this.handleDelayChange} />
        </div>
        <div className="input-field col s2 center">
          <h5>{this.delayInSeconds()} secs</h5>
        </div>
      </div>
    )
  }
});

module.exports = InputForm;
