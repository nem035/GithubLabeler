import React from 'react';
import app from 'ampersand-app';

export default React.createClass({
  displayName: 'Home',

  render() {
    const isLoggedIn = !!app.user.token;

    let content;
    if (isLoggedIn) {
      content = (
        <a href="/repos" className="button button-large">
          Go to My Repos
        </a>
      );
    } else {
      content = (
        <a href="/login" className="button button-large">
          <span className="mega-octicon octicon-mark-github"></span> Login with GitHub
        </a>
      );
    }

    return (
      <div className="container">
        <header role="banner">
          <h1>Github Labeler</h1>
        </header>
        <div>
          <p>We label stuff for you, because, we can&trade;</p>
          {content}
        </div>
      </div>
    );
  },
});
