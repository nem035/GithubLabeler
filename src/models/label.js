import AuthModel from '../helpers/auth-model';

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
});
