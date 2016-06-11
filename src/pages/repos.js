import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  displayName: 'Repos',
  mixins: [ampersandMixin],

  render() {
    const { repos } = this.props;

    const reposList = repos.map(repo => (
      <li>
        <a href="">{repo.full_name}</a>
      </li>
    ));

    return (
      <div>
        <h2>Repos</h2>
        <ul>{reposList}</ul>
      </div>
    );
  },
});
