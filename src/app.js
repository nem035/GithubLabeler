import app from 'ampersand-app';
import Router from './router';
import User from './models/user';

import styles from './styles/main.styl';
import icons from 'octicons/octicons/octicons.css';

// initialize the app singleton
app.extend({
  init() {
    this.baseURL = 'https://api.github.com';

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
