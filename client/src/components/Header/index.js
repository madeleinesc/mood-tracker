import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  /*const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };*/
  return (


    <header className="nav px-3">
      <div className="nav-item">
        <div>
            <h1 className="display-6">Mood Tracker</h1>
          <p>A minimalist app to track your mood.</p>
        </div>
       
      </div>
    </header>



  );
};

export default Header;
