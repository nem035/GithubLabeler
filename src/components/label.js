import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  displayName: 'Label',
  mixins: [ampersandMixin],

  render() {
    const { label } = this.props;
    const backgroundColor = `#${label.color}`;

    let content;
    if (label.isEditing) {
      content = (
        <form className="label">
          <span className="label-color avatar avatar-small avatar-rounded">&nbsp;</span>
          <input name="name" />
          <input name="color" />
          <button
            type="submit"
            className="button button-small"
          >
            Save
          </button>
          <button
            type="button"
            className="button button-small button-unstyled"
            onClick={this.onCancelClick}
          >
            Cancel
          </button>
        </form>
      );
    } else {
      content = (
        <div className="label">
          <span
            className="label-color"
            style={{ backgroundColor }}
          >
            &nbsp;
          </span>
          <span>{label.name}</span>
          <span
            className="octicon octicon-pencil"
            onClick={this.onEditClick}
          />
          <span className="octicon octicon-x"/>
        </div>
      );
    }
    return <div>{content}</div>;
  },

  onEditClick() {
    this.props.label.isEditing = true;
  },

  onCancelClick() {
    this.props.label.isEditing = false;
  }
});
