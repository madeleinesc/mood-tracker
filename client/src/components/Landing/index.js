import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Landing = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      return (
        <body>


      <div className="container btn-cont text-center px-5">
            
        {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button className="btn btn-lg btn-dark m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-lg btn-dark btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-dark m-2" to="/signup">
              Signup
            </Link>
          </>
        )}

      </div>


        </body>
        
      )
}

export default Landing;