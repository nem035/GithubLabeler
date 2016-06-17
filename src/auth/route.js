import app from 'ampersand-app';

export default function (handlerName) {
  return function authRoute(...args) {
    if (app.user.isLoggedIn) {
      this[handlerName].apply(this, args);
    } else {
      this.redirectTo('/');
    }
  };
}
