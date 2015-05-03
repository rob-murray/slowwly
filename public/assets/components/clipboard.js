
var Clipboard = React.createClass({
  propTypes: {
    value : React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      className : "clipboard"
    };
  },

  selectText : function() {
    var element = this.getDOMNode();
    element.focus();
    element.select();
  },

  render: function() {
    return React.createElement("textarea", React.__spread({}, this.props, { readOnly: true }));
  }
});

module.exports = Clipboard;
