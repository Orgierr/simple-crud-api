const uuid = require('uuid');
const persons = [
  {
    id: uuid.v4(),
    name: 'Tom',
    age: 23,
    hobbies: []
  },
  {
    id: uuid.v4(),
    name: 'Bob',
    age: 23,
    hobbies: []
  },
]

module.exports = persons;