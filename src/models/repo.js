import Model from 'ampersand-model';
import app from 'ampersand-app';
import GithubAuthMixin from '../helpers/github-auth-mixin';

export default Model.extend(GithubAuthMixin, {
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
});
