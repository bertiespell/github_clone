import React from 'react';
import Nav from './Nav';
import {Link} from 'react-router';
import axios from 'axios';

const Repositories = React.createClass({
  getInitialState: function () {
    return {
            repositories: ['repo 1', 'repo 2', 'repo 3', 'repo 4']
          }
  },

  componentDidMount: function () {
      axios.get('https://northcoderssprint-github-elaycqpgip.now.sh/api/northcoders/repos')
        .then(function (response) {
          let newRepos = response.data.map(function (repo) {
              return {
                  repoName: repo.full_name,
                  forks: repo.forks
              }
          });
          this.setState({
            repositories: newRepos
          })
        }.bind(this))
  },

  extractUserData: function (data) {
    return {
      avatar_url: data.avatar_url,
      email: data.email,
      name: data.name,
      location: data.location
    }
  },

  render: function () {
    return (
      <div className="home">
        <Nav />
        {this.props.children}

        <ul>
          {this.state.repositories.map(function (repo) {
            return <li><Link to='/people/northcoders/trello'>{repo.repoName}</Link></li>
          })}
        </ul>
      </div>
    );
  }
});

export default Repositories;