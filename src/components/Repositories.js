import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router';
import axios from 'axios';
const URL = 'https://northcoderssprint-github-elaycqpgip.now.sh';
import './main.css';
import 'bulma/css/bulma.css'


const Repositories = React.createClass({
  getInitialState: function () {
    return {
      repositories: ['repo 1', 'repo 2', 'repo 3', 'repo 4'],
      orgName: 'northcoders'
    }
  },
  componentDidMount: function () {
    axios.get(URL + '/api/northcoders/repos')
      .then(function (response) {
        console.log(response);
        let newRepos = response.data.map(function (repo) {
          return {
            avatar_url: repo.forks,
            created_at: repo.created_at,
            name: repo.name,
            language: repo.language
          }
        });
        this.setState({
          repositories: newRepos,
        })
      }.bind(this))
  },
  render: function () {
    return (
      <div className="home">
        {this.props.children}

        <ul>
          {this.state.repositories.map((repo)=> {
            return <li><Link to={'/people/' + this.state.orgName + '/' + repo.name}>{repo.name}
            </Link>
              <p><span>{repo.language}</span>
                <span>{repo.forks}</span>
                <span>{repo.created_at}</span>
              </p>
            </li>
          })}
        </ul>
      </div>
    );
  }
});

export default Repositories;