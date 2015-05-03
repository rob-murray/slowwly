var Clipboard = require('./clipboard');

var SlowwlyUrl = React.createClass({
  getDefaultProps: function() {
    return {
      url: "{Select url and delay time}"
    };
  },

  handleCopyClick: function(e) {
    e.preventDefault();
    this.refs.clipboard.selectText();
  },

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h4 ref="slowwly_url" className="card-title center">
                {this.props.url}
              </h4>
              <Clipboard ref="clipboard" value={this.props.url} />
            </div>
            <div className="card-action">
              <a href="#" onClick={this.handleCopyClick}>Copy</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SlowwlyUrl;
