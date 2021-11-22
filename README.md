# simple-crud-api

## Install app

Clone repo

```
git clone https://github.com/Orgierr/simple-crud-api.git
```

Go to app folder

```
cd simple-crud-api
```

Install dependencies

```
npm i
```

## Start app

Run in develpment

```
npm start:dev
```

Build and run in production

```
npm start:prod
```

Run in production

```
npm start
```

Test api

```
npm test
```

## Usage

For PUT and POST reqests required json objects with following properties: `name(string)`,`age(number)`, `hobbies (array of strings or empty array)`

```
# Get all persons
GET   /person

# Get  persons by id
GET   /person/:id

# Create new person
POST  /person

# Update person by id
PUT  /person/:id

# Delete person by id
DELETE  /person/:id

```
