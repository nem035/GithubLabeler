import AuthModel from '../helpers/auth-model';

export default AuthModel.extend({
  url() {
    return `${this.parent.url()}/labels/${this.name}`;
  },

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
