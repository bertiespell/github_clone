import React from 'react';
import { Link } from 'react-router';
import './main.css';
import 'bulma/css/bulma.css'
import '../../node_modules/font-awesome/css/font-awesome.css'

const red = {
    color: 'red'
}

function Nav() {
    return (
        <div>
                <div className="card">
                    <div className="indent">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image" styleClass="height: 40px; width: 40px;">
                                    <img src="https://avatars2.githubusercontent.com/u/16081355?v=3&s=200" alt="Image"/>
                                </figure>
                            </div>
                            <div className="media-content">
                            <p className="title is-4">Northcoders</p>
                            <p className="subtitle is-6">Manchester</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                        
            <nav className='tabs'>
                <ul>
                    <li>
                        <Link to='/repositories' activeStyle={red} onlyActiveOnIndex><i className="fa fa-list-alt" aria-hidden="true"></i>Repositories</Link>
                    </li>
                    <li>
                        <Link to='/people' activeStyle={red}><i className="fa fa-users" aria-hidden="true"></i>People</Link>
                    </li>
                    <li>
                        <Link to='/teams' activeStyle={red}><i className="fa fa-address-card-o" aria-hidden="true"></i>Teams</Link>
                    </li>
                    <li>
                        <Link to='/projects' activeStyle={red}> <i className="fa fa-server" aria-hidden="true"></i>Projects</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;