import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  displayName: 'Label',
  mixins: [ampersandMixin],

  onEditClick(event) {
    event.preventDefault();
    this.props.label.isEditing = true;
  },

  onCancelClick(event) {
    event.preventDefault();
    this.props.label.isEditing = false;
  },

  onDeleteClick(event) {
    event.preventDefault();
    this.props.label.destroy(); // can pass { wait: true } // don't remove this label until the DELETE is successful
  },

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
            className="button button-small button-approve"
          >
            Save
          </button>
          <button
            type="button"
            className="button button-small button-neutral"
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
          <span
            className="octicon octicon-x"
            onClick={this.onDeleteClick}
          />
        </div>
      );
    }
    return <div>{content}</div>;
  },
});
