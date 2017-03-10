const React = require('react');
require('./main.css');
import Nav from './Nav';

const Home = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
});

export default Home;
