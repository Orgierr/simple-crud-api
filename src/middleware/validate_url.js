const {validate} = require('uuid');
const CustomError = require('../utils/custom_error');

function validateUrl(req, res) {
  const params = req.url.split('/')
  if (req.url === '/person' || (params.length === 3 && validate(params[2]))) {
    req.id = params[2];
    return;
  }
  else if (params.length === 3 && !validate(params[2])) {

    throw new CustomError({code: 400, text: 'Invalid id'});
  }
  throw new CustomError({code: 404, text: 'Not Found'});
}
module.exports = validateUrl;