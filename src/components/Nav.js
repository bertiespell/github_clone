import React from 'react';
import {Link} from 'react-router';
import './main.css';
import 'bulma/css/bulma.css'


const red = {
    color: 'red'
}

function Nav (props){
    return (
      <nav>
          <ul>
              <li>
                  <Link to='/repositories' activeStyle={red} onlyActiveOnIndex>Repositories</Link>
              </li>
              <li>
                  <Link to='/people' activeStyle={red}>People</Link>
              </li>
              <li>
                  <Link to='/teams' activeStyle={red}>Teams</Link>
              </li>
              <li>
                  <Link to='/projects' activeStyle={red}>Projects</Link>
              </li>
          </ul>
      </nav>
    );
}

export default Nav;