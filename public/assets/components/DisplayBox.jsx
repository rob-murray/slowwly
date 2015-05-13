var Clipboard = require('./Clipboard.jsx');

var DisplayBox = React.createClass({
  propTypes: {
    url : React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      selected: false
    }
  },

  getDefaultProps: function() {
    return {
      url: "{Select url and delay time}"
    };
  },

  render: function() {
    var selectedText = this.state.selected ? "Hit Ctrl + C" : null;

    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h4 ref="slowwly_url" className="card-title center">
                {this.props.url}
              </h4>

            </div>
            <div className="card-action">
              <Clipboard ref="clipboard" value={this.props.url} />
              <a href="" onClick={this._handleCopyClick}>Copy</a> {selectedText}
            </div>
          </div>
        </div>
      </div>
    );
  },

  _handleCopyClick: function(e) {
    e.preventDefault();
    this.refs.clipboard.selectText();
    this.setState({selected: true});
    setTimeout(function () {
      this.setState({selected: false});
    }.bind(this), 5000);

    return;
  }
});

module.exports = DisplayBox;
