import Router from 'ampersand-router';
import React from 'react';
import NavHelper from './components/nav-helper';
import Layout from './layout';
import HomePage from './pages/home';
import ReposPage from './pages/repos';

const {
  body
} = document;

export default Router.extend({
  renderPage(page, opts = { layout: true }) {
    const { layout } = opts;

    // wrap pages in a layout by default
    if (layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      );
    }

    // wrap every page in the NavHelper to always handle local links
    page = (
      <NavHelper>
        {page}
      </NavHelper>
    );
    
    React.render(page, body);
  },

  routes: {
    '': 'home',
    'repos': 'repos'
  },

  home() {
    this.renderPage(<HomePage />, { layout: false });
  },

  repos() {
    this.renderPage(<ReposPage />);
  }
});
