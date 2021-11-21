const persons = require('../db/persons');
const validatePerson = require('../middleware/validate_person');
const validateBody = require('../middleware/validate_body');

async function app(req, res) {
  try {
    req.persons = persons;
    res.setHeader('Content-Type', 'application/json');

    validatePerson(req, res)
    await validateBody(req, res)
    res.end()

  } catch (error) {
    res.statusCode = error.message.code || 500;
    res.end(JSON.stringify(error.message || 'Internal Server Error'));
  }
}

module.exports = app;