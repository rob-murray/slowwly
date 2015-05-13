
var InputForm = React.createClass({
  propTypes: {
    onInputChange: React.PropTypes.func.isRequired,
    delayTime: React.PropTypes.number.isRequired,
    url: React.PropTypes.string.isRequired
  },

  render: function() {
    var delayTime = this._delayInSeconds(),
      url = this.props.url;

    return (
      <div className="row">
        <div className="input-field col s6">
          <input ref="redirect_url" value={url} id="redirect_url" type="text" className="validate" onChange={this._handleUrlChange} />
        </div>
        <div className="input-field col s4">
            <input type="range" id="delay_time" min="0" max="10000" step="100" onInput={this._handleDelayChange} />
        </div>
        <div className="input-field col s2 center">
          <h5>{delayTime} secs</h5>
        </div>
      </div>
    );
  },

  _handleDelayChange: function(e) {
    e.preventDefault();
    var delay = e.currentTarget.valueAsNumber;
    this.props.onInputChange({url: this.props.url, delayTime: delay});

    return;
  },

  _handleUrlChange: function(e) {
    e.preventDefault();
    var url = e.currentTarget.value;
    if (!url) {
      return;
    }
    this.props.onInputChange({url: url, delayTime: this.props.delayTime});

    return;
  },

  _delayInSeconds: function() {
    return this.props.delayTime / 1000;
  }
});

module.exports = InputForm;
