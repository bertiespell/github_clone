import React from 'react';
// import {Link} from 'react-router';

const UserRepo = React.createClass({
  render: function () {
    return (
        <div>
            <h1>{this.props.params.repo}</h1>
        </div>
    );
  }
});

export default UserRepo;