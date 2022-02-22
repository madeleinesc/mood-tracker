import React from 'react';
import { Link, Route } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  /*const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };*/
  return (


    <header className="nav px-3">
      <div className="nav-item">
        
            <h1 className="display-6">Mood Tracker</h1>
          <p className="header-subtitle">A minimalist app to track your mood.</p>
        

        
       
      </div>

      <div className="nav-item ms-auto">
        <Route exact path={['/moods', '/welcome']}>
          <Link to="/moods"><p className="lead nav-links mood-link">Show Moods</p></Link>
          <Link onClick={() => Auth.logout()}><p className="lead nav-links">Logout</p></Link>
        </Route>
      </div>
    </header>



  );
};

export default Header;
