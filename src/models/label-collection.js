import AuthCollection from '../auth/collection';
import Label from './label';

export default AuthCollection.extend({
  url() {
    return `${this.parent.url()}/labels`;
  },

  model: Label,
});
