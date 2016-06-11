import Router from './router';
import Styles from './styles/main.styl';
import app from 'ampersand-app';

// initialize the app singleton

app.extend({
  init() {
    this.router = new Router();

    // start tracking routing history
    // and install routing logic
    this.router.history.start();
  }
});

app.init();

export default app;
