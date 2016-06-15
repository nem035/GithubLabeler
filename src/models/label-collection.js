import Collection from 'ampersand-rest-collection';
import Label from './label';
import GithubAuthMixin from '../helpers/github-auth-mixin';

export default Collection.extend(GithubAuthMixin, {
  url() {
    return `${this.parent.url()}/labels`;
  },

  model: Label
});
