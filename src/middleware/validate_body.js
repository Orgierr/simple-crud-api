const CustomError = require('../utils/custom_error');

function validateBody(req, res) {
  if (req.method === 'POST' || req.method === 'PUT') {
    return new Promise((resolve, reject) => {
      try {
        let body = '';
        req
          .on('data', (chunk) => {
            body += chunk.toString();
          })
          .on('end', () => {
            try {
              const bodyObj = JSON.parse(body);
              if (
                Object.keys(bodyObj).length === 3 &&
                typeof bodyObj.name === 'string' &&
                bodyObj.name.length &&
                typeof bodyObj.age === 'number' &&
                !isNaN(bodyObj.age) &&
                bodyObj.hobbies.every((i) => typeof i === 'string' && i.length)
              ) {
                req.body = bodyObj;
                resolve();
              } else {
                reject(new CustomError({ code: 400, text: 'Not valid body' }));
              }
            } catch (error) {
              reject(
                new CustomError({ code: 500, text: 'Internal Server Error' })
              );
            }
          });
      } catch (error) {
        reject(new CustomError({ code: 500, text: 'Internal Server Error' }));
      }
    });
  }
}

module.exports = validateBody;
