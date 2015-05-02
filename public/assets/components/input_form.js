
var InputForm = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="http://google.com" id="redirect_url" type="text" className="validate" />
        </div>
        <div className="input-field col s4">
          <p className="range-field">
            <input type="range" id="delay_time" min="1" max="10000" />
          </p>
        </div>
        <div className="input-field col s2 center">
          <span>1</span> Second
        </div>
      </div>
    )
  }
});

module.exports = InputForm;
