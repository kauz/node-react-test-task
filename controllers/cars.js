module.exports.controller = (app) => {
  app.get('/cars', (req, res) => {
    res.json({obj: 'respond with a resource'});
  });
};
