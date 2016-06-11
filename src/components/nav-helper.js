import React from 'react';
import localLinks from 'local-links';

export default React.createClass({
  displayName: 'NavHelper',
  
  onClick(event) {
    const pathName = localLinks.getLocalPathname(event);
    if (pathName) {
      event.preventDefault();
      app.router.history.navigate(pathName);
    }
  },

  render() {
    return (
      <div onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }

});
