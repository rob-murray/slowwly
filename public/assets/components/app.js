
var App = React.createClass({
    render() {
        return (
          <div>
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

            <div className="row">
              <div className="col s12">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Your Slowwly URL</span>
                    <p className="center">url</p>
                  </div>
                  <div className="card-action">
                    <a href="#">Copy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
});

module.exports = App;
