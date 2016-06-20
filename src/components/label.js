import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

const VALID_HEX_CHARS_REGEX = /[0-9A-F]/ig;

export default React.createClass({
  displayName: 'Label',

  propTypes: {
    label: React.PropTypes.object.isRequired,
  },

  mixins: [ampersandMixin],

  getInitialState() {
    const { name, color } = this.props.label;

    return {
      name,
      color,
    };
  },

  onNameChange({ target }) {
    const name = target.value;
    this.setState({
      name,
    });
  },

  onColorChange({ target }) {
    const color = target.value
      .slice(1)                      // remove #
      .match(VALID_HEX_CHARS_REGEX); // extract only valid hex values

    this.setState({
      color: color ? color.join('') : '',
    });
  },

  onEditClick(event) {
    event.preventDefault();
    this.props.label.isEditing = true;
  },

  onCancelClick(event) {
    event.preventDefault();

    const { label } = this.props;

    if (label.isSaved) {
      label.isEditing = false;
      this.setState(this.getInitialState());
    } else {
      label.destroy();
    }
  },

  onDeleteClick(event) {
    event.preventDefault();
    // can pass { wait: true } which means don't remove this label until the DELETE is successful
    this.props.label.destroy();
  },

  onSubmit(event) {
    event.preventDefault();

    const { label } = this.props;

    if (label.isSaved) {
      label.update(this.state);
    } else {
      label.save(this.state, {
        success() {
          label.isSaved = true;
        },
      });
    }

    label.isEditing = false;
  },

  render() {
    const { label } = this.props;
    const { name, color } = this.state;
    const backgroundColor = `#${color}`;
    const cannotSave = name.length === 0 || !(color.length === 3 || color.length === 6);

    let content;
    if (label.isEditing) {
      content = (
        <form onSubmit={this.onSubmit} className="label fade-in">
          <span
            className="label-color avatar avatar-small avatar-rounded"
            style={{ backgroundColor }}
          >
            &nbsp;
          </span>
          <input
            name="name"
            value={name}
            onChange={this.onNameChange}
          />
          <input
            name="color"
            maxLength="7"
            value={backgroundColor}
            onChange={this.onColorChange}
          />
          <button
            type="submit"
            disabled={cannotSave}
            className="button button-small button-approve"
          >
            &nbsp;Save&nbsp;
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
        <div className="label fade-in">
          <span
            className="label-color"
            style={{ backgroundColor }}
          >
            &nbsp;
          </span>
          <span>{name}</span>
          <span
            className="octicon octicon-pencil"
            title="Edit"
            onClick={this.onEditClick}
          />
          <span
            className="octicon octicon-x"
            title="Delete"
            onClick={this.onDeleteClick}
          />
        </div>
      );
    }
    return <div>{content}</div>;
  },
});
