const persons = require('../db/persons');

async function app(req, res) {
  try {
    req.persons = persons;
    res.setHeader('Content-Type', 'application/json');

    validateUrl(req, res)

  } catch (error) {
    res.statusCode = error.message.code || 500;
    res.end(JSON.stringify(error.message || 'Internal Server Error'));
  }
}

module.exports = app;