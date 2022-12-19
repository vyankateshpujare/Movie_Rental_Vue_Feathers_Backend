const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  customerId: objectId().required(),
  movieId: objectId().required(),
});

module.exports = schema;
