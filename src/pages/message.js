import React from 'react';

export default React.createClass({
  displayName: 'Message',

  render() {
    const { title, body, type } = this.props;

    const typeClass = type ? `message-${type}` : ''
    const className = `message ${typeClass} fade-in`;

    return (
      <div className={className}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  },
});
