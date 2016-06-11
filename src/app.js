import app from 'ampersand-app';
import Router from './router';
import User from './models/user';

import Styles from './styles/main.styl';

// initialize the app singleton
app.extend({
  init() {
    this.user = new User();
    this.user.fetchData();
    // create the router,
    // start tracking routing history
    // and install routing logic
    this.router = new Router();
    this.router.history.start();
  },
});

app.init();

// For debugging purposes
window.app = app;

export default app;
