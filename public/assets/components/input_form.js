
var InputForm = React.createClass({
  getInitialState: function() {
    return {selectedDelay: 3000};
  },

  handleDelayChange: function(e){
    e.preventDefault();
    this.setState({selectedDelay: e.currentTarget.valueAsNumber})
  },

  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="http://google.com" id="redirect_url" type="text" className="validate" />
        </div>
        <div className="input-field col s4">
          <p className="range-field">
            <input type="range" id="delay_time" value={this.state.selectedDelay} min="0" max="10000" step="100" onInput={this.handleDelayChange} />
          </p>
        </div>
        <div className="input-field col s2 center">
          <span>{this.state.selectedDelay / 1000}</span> secs
        </div>
      </div>
    )
  }
});

module.exports = InputForm;
