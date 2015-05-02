
var SlowwlyUrl = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Your Slowwly URL</span>
              <p className="center">{this.props.host}/delay/delay_time/url/url</p>
            </div>
            <div className="card-action">
              <a href="#">Copy</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SlowwlyUrl;
