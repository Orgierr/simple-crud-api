const { v4 } = require('uuid');

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
        req.body.id = req.id;
        req.persons[req.persons.findIndex((p) => p.id === req.id)] = req.body;
        res.end(JSON.stringify(req.body));

        break;
      case 'DELETE':
        req.persons.splice(
          req.persons.findIndex((p) => p.id === req.id),
          1
        );
        res.statusCode = 204;
        res.end('Sucsses delete');

        break;

      default:
    }
  } catch (error) {
    throw new CustomError({ code: 500, text: 'Internal Server Error' });
  }
}
module.exports = methods;
