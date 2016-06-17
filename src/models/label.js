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
    authXHR({
      url: '', // TODO
      json: attrs,
      method: 'PATCH',
    });
  },
});
