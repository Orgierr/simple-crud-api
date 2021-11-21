const {validate} = require('uuid');
const CustomError = require('../utils/custom_error');

function validatePerson(req, res) {
  const params = req.url.split('/');
  const id = params[2];
  if (
    req.url === '/person' ||
    (params.length === 3 &&
      validate(id) &&
      req.persons.filter((person) => person.id === id).length)
  ) {
    req.id = id;
    return;
  } else if (params.length === 3 && !validate(id)) {
    throw new CustomError({code: 400, text: 'Invalid id'});
  }

  throw new CustomError({code: 404, text: 'Not Found'});
}
module.exports = validatePerson;
