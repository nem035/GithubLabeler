import Model from 'ampersand-model';
import app from 'ampersand-app';
import GithubAuthMixin from '../helpers/github-auth-mixin';
import RepoCollection from './repo-collection';

const {
  localStorage: cache,
} = window;

export default Model.extend(GithubAuthMixin, {
  url() {
    return `${app.baseURL}/user`;
  },

  // persisting between client and server
  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string',
  },

  // persisting only on the client
  session: {
    token: 'string',
  },

  // link to a model of a collection of repos
  collections: {
    repos: RepoCollection
  },

  // load token from cache and
  // setup an onChange listener on it
  initialize() {
    this.token = cache.token;
    this.on('change:token', this.onTokenChange);
  },

  // anytime token changes,
  // write it to cache and
  // and re-fetch the user
  onTokenChange() {
    cache.token = this.token;
    this.fetchData();
  },

  fetchData() {
    if (this.token) {
      this.fetch();
      this.repos.fetch();
    }
  },
});
