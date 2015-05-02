var SlowwlyUrl = require('./slowwly_url');
var InputForm = require('./input_form');

var App = React.createClass({
    render() {
        return (
          <div>
            <InputForm />
            <SlowwlyUrl host="http://slowwly.robertomurray.co.uk" />
          </div>
        );
    }
});

module.exports = App;
