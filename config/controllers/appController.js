function appController(req, res) {

  app.get('/', function(req, res) {
    res.render('index');
  });
}

module.exports = {
  appController: appController
}