import Collection from 'ampersand-rest-collection';
import app from 'ampersand-app';
import Repo from './repo';
import GithubAuthMixin from '../helpers/github-auth-mixin';

export default Collection.extend(GithubAuthMixin, {
  url() {
    return `${app.baseURL}/user/repos`;
  },

  model: Repo,

  getByFullName(fullName) {
    const model = this.findWhere({ full_name: fullName });

    if (!model) {
      return new Repo({
        full_name: fullName,
      });
    }

    model.fetch();

    return model;
  },
});
