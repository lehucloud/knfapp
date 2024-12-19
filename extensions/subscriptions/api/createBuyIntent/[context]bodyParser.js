const bodyParser = require('body-parser');

module.exports = (request, response, stack, next) => {
  bodyParser.urlencoded({ inflate: false })(request, response, next);
};
