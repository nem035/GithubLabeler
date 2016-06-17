import React from 'react';
import app from 'ampersand-app';

export default React.createClass({
  displayName: 'Home',

  render() {
    return (
      <div className="container">
        <header role="banner">
          <h1>Github Labeler</h1>
        </header>
        <div>
          <p>We label stuff for you, because, we can&trade;</p>
          <a href="/login" className="button button-large">
            <span className="mega-octicon octicon-mark-github"></span> Login with GitHub
          </a>
        </div>
      </div>
    );
  },
});
