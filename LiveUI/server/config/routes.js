var request = require('request');

module.exports = function (app, config) {

  app.get('/partials/*', function (req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.all('/api/*', function (req, res) {
    res.send(404);
  });

  app.get('/data', function (req, res) {
     request(config.self.live_api + "/data", function (err, response, body) {
         res.send(body);
     })
  });

  app.get('*', function (req, res) {
    res.render('index');
  });
};
