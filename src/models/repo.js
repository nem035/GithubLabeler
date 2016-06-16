import app from 'ampersand-app';
import AuthModel from '../helpers/auth-model';
import LabelCollection from './label-collection';

export default AuthModel.extend({
  url() {
    return `${app.baseURL}/repos/${this.full_name}`;
  },

  props: {
    id: 'number',
    name: 'string',
    full_name: 'string',
  },

  derived: {
    appUrl: {
      deps: ['full_name'],
      fn() {
        return `repo/${this.full_name}`;
      },
    },
  },

  // link to a model of a collection of labels
  collections: {
    labels: LabelCollection,
  },

  // override the Model fetch method
  fetch(...args) {
    AuthModel.prototype.fetch.apply(this, args);
    this.labels.fetch();
  },
});
