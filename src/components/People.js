import React from 'react';
import { Link } from 'react-router'
import axios from 'axios';
const URL = 'https://northcoderssprint-github-elaycqpgip.now.sh';
import './main.css';
import 'bulma/css/bulma.css'


const People = React.createClass({
    getInitialState: function () {
        return {
            users: ['User1', 'User2', 'User3']
        }
    },
    componentDidMount: function () {
        axios.get(URL + '/api/northcoders/members')
            .then((response) => {
                let newUsers = response.data;
                this.setState({
                    users: newUsers
                })
            })
    },
    render: function () {
        return (
            <div>
                <ul>
                    {this.state.users.map(function (user) {
                        return <li className='user-card'>
                            <span><img src={user.avatar_url} alt="Loading..." className="user-img"/></span>
                            <Link to={'/people/' + user.login}>
                            <span>{user.login} </span>
                            </Link>
                            <span>Public</span>
                            <span>Member</span>
                            <span>Team</span>
                        </li>
                    })}
                </ul>

                {this.props.children}
            </div>
        );
    }
});

export default People;