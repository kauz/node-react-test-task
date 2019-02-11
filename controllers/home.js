module.exports.controller = (app) => {
  app.get('/', (req, res) => {
    res.json({status: 'ok'});
  });
};
