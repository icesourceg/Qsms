module.exports = function(app) {

  const smsAPI = require('./controllers/smsApi');
  
  //html
  //app.use('/', guest);

  // API
  ///For API Call
  app.get('/api', (req, res) => {
    res.status(200).send({"message": "OK", "data": [], "output": "API Works"});
  });

  /// SMS API
  app.use('/api/qsms', smsAPI);
};
