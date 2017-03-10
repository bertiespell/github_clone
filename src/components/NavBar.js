import React from 'react';
import './main.css';
import 'bulma/css/bulma.css'
import '../../node_modules/font-awesome/css/font-awesome.css'




function NavBar() {
    return (
        <nav className='nav' id='header'>
            <div className="nav-left">
                <a className="nav-item"><i className='fa fa-github' aria-hidden="true"></i></a>
                <p className="control">
                    <input className="input" type="text" placeholder="Search" /> </p>
                <span>Pull requests</span>
                <span>Issues</span>
                <span>Gist</span>
            </div>
            <div className="nav-right">
                <i className="fa fa-plus" aria-hidden="true"></i>
                <i className="fa fa-sort-desc" aria-hidden="true"></i>
                <img id='avatar' src='https://avatars2.githubusercontent.com/u/16081355?v=3&s=200' />
                <i className="fa fa-sort-desc" aria-hidden="true"></i>
            </div>
        </nav>
    );
}

export default NavBar;