var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css')

class App extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}!
      </div>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

ReactDOM.render(
  <App 
    name="Gerald"
  />,
  document.getElementById('app')
)
