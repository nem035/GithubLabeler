import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  displayName: 'Layout',

  mixins: [ampersandMixin],

  render() {
    const {
      user,
      children,
    } = this.props;

    return (
      <div>
        <nav className="top-nav top-nav-light cf" role="navigation">
          <input id="menu-toggle" className="menu-toggle" type="checkbox" />
          <label htmlFor="menu-toggle">Menu</label>
          <ul className="list-unstyled list-inline cf">
            <li><a href="/">Home</a></li>
            <li><a href="/repos">Repos</a></li>
            <li className="pull-right">
              <a href={user.html_url} target="_blank">
                <img
                  className="avatar"
                  alt="avatar"
                  src={user.avatar_url}
                  width="40"
                  height="40"
                />
              </a>
              {user.login}
              &nbsp;
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </nav>
        <div className="container">
          {children}
        </div>
      </div>
    );
  },
});
