import React from 'react';
import './main.css';
import 'bulma/css/bulma.css'

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