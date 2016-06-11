import Router from 'ampersand-router';
import React from 'react';
import QS from 'qs';
import NavHelper from './components/nav-helper';
import Layout from './layout';
import HomePage from './pages/home';
import ReposPage from './pages/repos';

const {
  stringify: qsStringify,
  parse: qsParse,
} = QS;

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
    login: 'login',
    'auth/callback?:queryString': 'authCallback',
  },

  home() {
    this.renderPage(<HomePage />, { layout: false });
  },

  repos() {
    this.renderPage(<ReposPage />);
  },

  login() {
    const clientId = '287e3117679dac51e201';
    const redirectUri = `${window.location.origin}/auth/callback`;
    const queryString = qsStringify({
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: 'user, repo',
    });
    window.location = `https://github.com/login/oauth/authorize?${queryString}`;
  },

  authCallback(queryString) {
    const data = qsParse(queryString);
    console.debug(data);
  },
});
