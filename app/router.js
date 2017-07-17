'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.resources('posts', '/api/posts', app.controller.posts);
};
