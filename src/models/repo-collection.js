import Collection from 'ampersand-rest-collection';
import Repo from './repo';
import GithubAuthMixin from '../helpers/github-auth-mixin';

export default Collection.extend(GithubAuthMixin, {
  url: 'https://api.github.com/user/repos',

  model: Repo,
});
