import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import Label from '../components/label';

export default React.createClass({
  displayName: 'Repo',
  mixins: [ampersandMixin],

  onNewLabelClick() {
    // create a new label model
    // in a non-saved state
    this.props.labels.add({
      name: '',
      color: '',
      isEditing: true,
      isSaved: false,
    }, { at: 0 });
  },

  render() {
    const { repo, labels } = this.props;

    const labelsList = labels.map(label => (
      <Label key={label.name} label={label} />
    ));

    return (
      <div className="container">
        <h1>{repo.full_name}</h1>
        <p>
          <button
            type="button"
            className="button"
            onClick={this.onNewLabelClick}
          >
            New Label
          </button>
        </p>
        <ul>
          {labelsList}
        </ul>
      </div>
    );
  },
});
