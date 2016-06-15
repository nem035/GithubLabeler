import Model from 'ampersand-model';
import GithubAuthMixin from '../helpers/github-auth-mixin';

export default Model.extend(GithubAuthMixin, {
  url() {
    return `${this.parent.url()}/labels/${this.name}`;
  },

  props: {
    name: 'string',
    color: 'string',
  }
});
