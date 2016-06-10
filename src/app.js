import Router from './router';
import Styles from './styles/main.styl';

window.app = {
  init() {
    this.router = new Router();

    // start tracking routing history
    // and install routing logic
    this.router.history.start();
  }
};

window.app.init();
