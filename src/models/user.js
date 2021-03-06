import app from 'ampersand-app';
import AuthModel from '../auth/model';
import RepoCollection from './repo-collection';

const {
  localStorage: cache,
} = window;

export default AuthModel.extend({
  url() {
    return `${app.baseURL}/user`;
  },

  // persisting between client and server
  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string',
    html_url: 'string',
  },

  // persisting only on the client
  session: {
    token: 'string',
  },

  // derived properties
  derived: {
    isLoggedIn: {
      deps: ['token'],
      fn() {
        const { token: userToken } = this;
        const { token: cachedToken } = cache;
        return !!userToken || !!cachedToken;
      },
    },
  },

  // link to a model of a collection of repos
  collections: {
    repos: RepoCollection,
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
