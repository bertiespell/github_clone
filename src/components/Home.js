const React = require('react');
require('./main.css');
import Nav from './Nav';

const Home = React.createClass({
  render: function () {
    return (
      <div className='home'>
        <Nav />
        {this.props.children}
      </div>
    );
  }
});

export default Home;
