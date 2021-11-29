const { v4 } = require('uuid');
const CustomError = require('../utils/custom_error');

function methods(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        if (req.id) {
          res.end(JSON.stringify(req.persons.find((p) => p.id === req.id)));
          return;
        }
        res.end(JSON.stringify(req.persons));
        break;

      case 'POST':
        req.body.id = v4();
        req.persons.push(req.body);
        res.statusCode = 201;
        res.end(JSON.stringify(req.body));

        break;
      case 'PUT':
        if (req.id) {
          req.body.id = req.id;
          req.persons[req.persons.findIndex((p) => p.id === req.id)] = req.body;
          res.end(JSON.stringify(req.body));
          return;
        }
        throw new CustomError({ code: 400, text: 'Invalid id' });

      case 'DELETE':
        if (req.id) {
          req.persons.splice(
            req.persons.findIndex((p) => p.id === req.id),
            1
          );
          res.statusCode = 204;
          res.end();
          return;
        }

        throw new CustomError({ code: 400, text: 'Invalid id' });

      default:
        throw new CustomError({ code: 500, text: 'Internal Server Error' });
    }
  } catch (error) {
    throw error;
  }
}
module.exports = methods;
