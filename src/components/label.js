import React from 'react';

export default React.createClass({
  displayName: 'Label',

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
          <button type="submit" className="button button-small">Save</button>
          <button type="button" className="button button-small button-unstyled">cancel</button>
        </form>
      );
    } else {
      content = (
        <div className="label">
          <span className="label-color" style={{ backgroundColor }}>&nbsp;</span>
          <span>{label.name}</span>
          <span className="octicon octicon-pencil"></span>
          <span className="octicon octicon-x"></span>
        </div>
      );
    }
    return <div>{content}</div>;
  },
});
