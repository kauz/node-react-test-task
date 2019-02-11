let fs = require('fs');
let path = require('path');

module.exports = (app, knex) => {
  fs.readdirSync('controllers').forEach((file) => {
    if (file.substr(-3) === '.js' && file !== 'index.js') {
      let route = require(path.resolve('./controllers/' + file));
      route.controller(app, knex);
    }
  });
};
