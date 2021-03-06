import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
const URL = 'https://northcoderssprint-github-elaycqpgip.now.sh';
import './main.css';
import 'bulma/css/bulma.css'


const User = React.createClass({
    getInitialState: function () {
        return {
            repos: ['repo1', 'repo2', 'repo3'],
            username: this.props.params.user
        }
    },
    componentDidMount: function () {
        axios.get(URL + '/api/users/' + this.state.username + '/repos')
            .then((response) => {
                let newRepos = response.data;
                this.setState({
                    repos: newRepos
                })
            })
    },
    render: function () {
        return (
            <div className='indent'>
                <h1 className="user-name">{this.state.username}</h1>
                <ul>
                    {this.state.repos.map((repo) => {
                        return <li  className="box indent"><Link to={'people/' + this.state.username + '/' + repo.name}>{repo.name}</Link>
                            <p><span>{repo.language}</span>
                                <span>{repo.forks}</span>
                                <span>{repo.created_at}</span>
                            </p>
                        </li>
                    })}
                </ul>
            </div >
        );
    }
});

export default User;