import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
      let nav = {
          Home: '/',
          About: '/about',
          Points: '/points',
          error: ''
      }

  return (
    <div className="header-nav">
        <div className="container">
            <nav>
                <ul>
                    {Object.keys(nav).map(key => {
                        if(key === 'error') {
                            return false
                        } else {
                            return <li key={key}><a href={nav[key]}>{key}</a></li>
                        }                      
                    })}
                </ul>
            </nav>
        </div>
    </div>

        );
    }
}

export default Nav;
