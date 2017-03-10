import React from 'react';
import './main.css';
import 'bulma/css/bulma.css'
import '../../node_modules/font-awesome/css/font-awesome.css'




function NavBar() {
    return (
        <nav className='nav' id='header'>
            <div className="indent-nav">
                <div className="nav-left">
                    <i className='fa fa-github fa-4x' aria-hidden="true"></i>
                    <div className='search'>
                        <span className='control'><input className="input" type="text" placeholder="Search" /></span>
                        <span>Pull requests</span>
                        <span>Issues</span>
                        <span>Gist</span>
                    </div>
                </div>
                <div className="nav-right">
                    <img id='avatar' src='https://avatars2.githubusercontent.com/u/16081355?v=3&s=200' />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;