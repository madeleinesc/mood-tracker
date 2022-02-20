import React from 'react';

const Welcome = () => {

  return (
    <body>
        <div class="container">
          <h2 class="display-5 text-center text-dark user-title">Hi <span>Hey there, {Auth.getProfile().data.username}!</span>, how are you feeling today?</h2>
          <p class="lead text-muted text-center">24th Feb 2022</p>
      </div>
    </body>
  );
};

export default Welcome;