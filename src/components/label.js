import React from 'react';

export default React.createClass({
  displayName: 'Label',

  render() {
    const { label } = this.props;
    return (
      <li key={label.name}>
        {label.name} : {label.color}
      </li>
    );
  },
});
