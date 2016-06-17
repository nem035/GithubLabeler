import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  displayName: 'Label',
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
    const color = target.value.slice(1); // remove #
    this.setState({
      color,
    });
  },

  onEditClick(event) {
    event.preventDefault();
    this.props.label.isEditing = true;
  },

  onCancelClick(event) {
    event.preventDefault();
    this.setState(this.getInitialState());
  },

  onDeleteClick(event) {
    event.preventDefault();
    this.props.label.destroy(); // can pass { wait: true } // don't remove this label until the DELETE is successful
  },

  render() {
    const { label } = this.props;
    const { name, color } = this.state;
    const backgroundColor = `#${color}`;

    let content;
    if (label.isEditing) {
      content = (
        <form className="label fade-in">
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
            value={backgroundColor}
            onChange={this.onColorChange}
          />
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
