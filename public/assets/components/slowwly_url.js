var Clipboard = require('./clipboard');

var SlowwlyUrl = React.createClass({
  getInitialState: function() {
    return {
      selectedDelay: 3000,
      url: "{url}"
    };
  },

  handleCopyClick: function(e) {
    e.preventDefault();
    this.refs.clipboard.selectText();
  },

  render() {
    var url = this.props.host+"/delay/"+this.state.selectedDelay+"/url/"+this.state.url;

    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h4 ref="slowwly_url" className="card-title center">
                {url}
              </h4>
              <Clipboard ref="clipboard" value={url} />
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
