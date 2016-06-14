import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  displayName: 'Repo',
  mixins: [ampersandMixin],

  render() {
    const { repo } = this.props;

    return (
      <div className="container">
        <h1>{repo.full_name}</h1>
        <p></p>
        <ul></ul>
      </div>
    );
  },
});
