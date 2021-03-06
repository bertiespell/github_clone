const React = require('react');
require('./main.css');
import NavBar from './NavBar';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

export default App;
