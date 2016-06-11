import Model from 'ampersand-model';

const {
  localStorage: cache,
} = window;

export default Model.extend({
  url: 'https://api.github.com/user',

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

  ajaxConfig() {
    return {
      headers: {
        Authorization: `token ${this.token}`,
      },
    };
  },

  fetchData() {
    if (this.token) {
      this.fetch();
    }
  },
});
