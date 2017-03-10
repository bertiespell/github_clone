import React from 'react';
import { Link } from 'react-router';


const User = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Nick</h1>
                <ul>
                    <li><Link to='/people/nick/trello'>Trello</Link></li>
                    {this.props.children}
                </ul>
            </div >
        );
    }
});

export default User;