import AuthModel from '../auth/model';
import authXHR from '../auth/xhr';

export default AuthModel.extend({

  idAttribute: 'name',

  props: {
    name: 'string',
    color: 'string',
  },

  session: {
    isEditing: {
      type: 'boolean',
      default: false,
    },
  },

  update(attrs) {
    const oldAttrs = this.attributes;

    authXHR({
      url: this.url(),
      json: attrs,
      method: 'PATCH',
    }, (err) => {
      // if update didn't work, reset attributes
      if (err) {
        this.set(oldAttrs);
      }
    });

    // assume everything worked and update
    this.set(attrs);
  },
});
