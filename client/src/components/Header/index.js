import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  /*const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };*/
  return (
    <header className="text-dark mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
            <h1 className="display-6">Mood Tracker</h1>
          <p className="m-0">A minimalist app to track your mood.</p>
        </div>
       
      </div>
    </header>
  );
};

export default Header;
