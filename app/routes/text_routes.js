module.exports = function(app, db) {

  app.post('/text', (req, res) => {
    res.send('Hello Postman!')

  });
};