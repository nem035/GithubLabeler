import Model from 'ampersand-model';

export default Model.extend({

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
});
