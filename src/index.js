import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Repositories from './components/Repositories';
import People from './components/People';
import Teams from './components/Teams';
import Projects from './components/Projects';
import User from './components/User';
import UserRepo from './components/UserRepo';
import App from './components/app';
import Home from './components/Home';

ReactDOM.render(
    <Router history={hashHistory}>

        <Route path='/' component={App}>
        <Route component={Home}>
            <IndexRoute component={Repositories} />
            <Route path='/repositories' component={Repositories}> </Route>
            <Route path='/people' component={People}></Route>
            <Route path='/teams' component={Teams}></Route>
            <Route path='/projects' component={Projects}></Route>
            </Route>
            <Route path='/people/:user' component={User}></Route>
            <Route path='/people/:user/:repo' component={UserRepo}></Route>
        </Route>


    </Router>,

    document.getElementById('app'));
