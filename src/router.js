import Router from 'ampersand-router';
import React from 'react';
import NavHelper from './components/nav-helper';
import Layout from './layout';
import HomePage from './pages/home';
import ReposPage from './pages/repos';

const {
  body,
} = document;

export default Router.extend({
  renderPage(pageComponent, opts = { layout: true }) {
    const { layout } = opts;

    // wrap pages in a layout based on a flag
    const pageContent = layout ? <Layout>{pageComponent}</Layout> : pageComponent;

    // wrap every page in the NavHelper to always handle local links
    React.render(<NavHelper>{pageContent}</NavHelper>, body);
  },

  routes: {
    '': 'home',
    repos: 'repos',
  },

  home() {
    this.renderPage(<HomePage />, { layout: false });
  },

  repos() {
    this.renderPage(<ReposPage />);
  },
});
