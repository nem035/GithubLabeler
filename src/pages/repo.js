import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  displayName: 'Repo',
  mixins: [ampersandMixin],

  render() {
    const { repo, labels } = this.props;

    const labelsList = labels.map(label => (
      <li key={label.name}>
        {label.name} : {label.color}
      </li>
    ));

    return (
      <div className="container">
        <h1>{repo.full_name}</h1>
        <p></p>
        <ul>
          {labelsList}
        </ul>
      </div>
    );
  },
});
