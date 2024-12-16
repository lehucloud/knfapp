const bodyParser = require('body-parser');

module.exports = (request, response, delegate, next) => {
  bodyParser.urlencoded({ extended: false })(request, response, next);
};
