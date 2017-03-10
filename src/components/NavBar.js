import React from 'react';
import './main.css';
import 'bulma/css/bulma.css'
import '../../node_modules/font-awesome/css/font-awesome.css'




function NavBar (){
    return (
        <nav className='nav'>
            <div className="nav-left">
                <a className="nav-item"><i className='fa fa-github' aria-hidden="true"></i></a>
            </div>
        </nav>
    );
}

export default NavBar;