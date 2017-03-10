import React from 'react';
import {Link} from 'react-router'

const People = React.createClass({
  render: function () {
    return (
        <div>
            <h1>People</h1>

            <ul>
                <Link to='/people/nick'>User 1</Link>
            </ul>
            
            {this.props.children}
        </div>
    );
  }
});

export default People;