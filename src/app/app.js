const persons = require('../db/persons');

async function app(req, res) {
  req.persons = persons;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(persons));
}

module.exports = app;