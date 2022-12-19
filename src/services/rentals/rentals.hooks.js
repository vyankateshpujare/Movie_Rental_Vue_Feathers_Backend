const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("@feathers-plus/validate-joi");
const schema = require("./rentals.model");
const fetchCustomer = require("./hooks/fetchCustomer");
const fetchMovie = require("./hooks/fetchMovie");
const decreaseNumberInStock = require("./hooks/decreaseNumberInStock");
const increaseNumberInStock = require("./hooks/increaseNumberInStock");
const setMovie = require("./hooks/setMovie");
const setNumberInStock = require("./hooks/setNumberInStock");
const isDateInNull = require("./hooks/isDateInNull");
const setDateIn = require("./hooks/setDateIn");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortearly: false }),
      fetchCustomer(),
      fetchMovie(),
    ],
    update: [validate.form(schema, { abortearly: false })],
    patch: [isDateInNull(), setDateIn(), setMovie(), setNumberInStock()],
    remove: [setMovie()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [decreaseNumberInStock()],
    update: [],
    patch: [increaseNumberInStock()],
    remove: [increaseNumberInStock()],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
