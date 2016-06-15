import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import Label from '../components/label';

export default React.createClass({
  displayName: 'Repo',
  mixins: [ampersandMixin],

  render() {
    const { repo, labels } = this.props;

    const labelsList = labels.map(label => <Label label={label} />);

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
