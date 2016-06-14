import Router from 'ampersand-router';
import React from 'react';
import QS from 'qs';
import xhr from 'xhr';
import app from 'ampersand-app';
import NavHelper from './components/nav-helper';
import Layout from './layout';
import HomePage from './pages/home';
import ReposPage from './pages/repos';
import RepoPage from './pages/repo';

const {
  stringify: qsStringify,
  parse: qsParse,
} = QS;

const {
  localStorage: cache,
} = window;

export default Router.extend({
  renderPage(pageComponent, opts = { layout: true }) {
    const { layout } = opts;

    // wrap pages in a layout based on a flag
    const pageContent = layout ? <Layout user={app.user}>{pageComponent}</Layout> : pageComponent;

    // wrap every page in the NavHelper to always handle local links
    React.render(<NavHelper>{pageContent}</NavHelper>, document.body);
  },

  routes: {
    '': 'home',
    repos: 'repos',
    'repo/:owner/:name': 'repo',
    login: 'login',
    'auth/callback?:queryString': 'authCallback',
    logout: 'logout',
  },

  home() {
    this.renderPage(<HomePage />, { layout: false });
  },

  repos() {
    this.renderPage(<ReposPage repos={app.user.repos} />);
  },

  repo(owner, name) {
    const repo = app.user.repos.getByFullName(`${owner}/${name}`);
    this.renderPage(<RepoPage repo={repo} />);
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
    const { code } = qsParse(queryString);
    xhr({
      url: `https://github-labeler-localhost.herokuapp.com/authenticate/${code}`,
      json: true,
    }, (err, req, { token }) => {
      app.user.token = token;
      this.redirectTo('/repos');
    });
  },

  logout() {
    cache.clear();
    window.location = '/';
  },
});
