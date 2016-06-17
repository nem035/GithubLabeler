import app from 'ampersand-app';

export default () => ({
  Authorization: `token ${app.user.token}`,
});
