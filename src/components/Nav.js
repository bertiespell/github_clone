import React from 'react';
import {Link} from 'react-router';

const red = {
    color: 'red'
}

function Nav (props){
    return (
      <nav>
          <ul>
              <li>
                  <Link to='/' activeStyle={red} onlyActiveOnIndex>Repositories</Link>
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