const users = require('./users/users.service.js');
const genre = require('./genre/genre.service.js');
const movies = require('./movies/movies.service.js');
const customers = require('./customers/customers.service.js');
const rentals = require('./rentals/rentals.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(genre);
  app.configure(movies);
  app.configure(customers);
  app.configure(rentals);
};
