import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Repositories from './components/Repositories';
import People from './components/People';
import Teams from './components/Teams';
import Projects from './components/Projects';
import User from './components/User';
import UserRepo from './components/UserRepo';

// import App from './components/App';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Repositories}>
            <Route path='/people' component={People}></Route>
            <Route path='/teams' component={Teams}></Route>
            <Route path='/projects' component={Projects}></Route>
        </Route>   
        <Route path='/people/:user' component={User}></Route>
        <Route path='/people/:user/:repo' component={UserRepo}></Route>    
    </Router>,
       
document.getElementById('app'));
