import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  displayName: 'Layout',

  propTypes: {
    user: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired,
  },

  mixins: [ampersandMixin],

  render() {
    const {
      user,
      children,
    } = this.props;

    const {
      html_url: repoUrl,
      avatar_url: avatarUrl,
      login: userName,
    } = user;

    return (
      <div>
        <nav className="top-nav top-nav-light cf" role="navigation">
          <input id="menu-toggle" className="menu-toggle" type="checkbox" />
          <label htmlFor="menu-toggle">Menu</label>
          <ul className="list-unstyled list-inline cf">
            <li><a href="/">Home</a></li>
            <li><a href="/repos">Repos</a></li>
            <li className="pull-right">
              <a href={repoUrl} target="_blank">
                <img
                  className="avatar avatar-small avatar-rounded"
                  alt="User Avatar"
                  src={avatarUrl}
                  title="Profile"
                  width="40"
                  height="40"
                />
              </a>
              {userName}
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
