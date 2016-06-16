import AuthCollection from '../helpers/auth-collection';
import Repo from './repo';

export default AuthCollection.extend({
  url() {
    return `${this.parent.url()}/repos`;
  },

  model: Repo,

  getByFullName(fullName) {
    let model = this.findWhere({ full_name: fullName });

    if (!model) {
      model = new Repo({
        full_name: fullName,
      });
    }

    model.fetch();

    return model;
  },
});
