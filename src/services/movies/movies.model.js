const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  title: Joi.string().required(),
  genreId: objectId().required(),
  dailyRentalRate: Joi.number().required(),
  numberInStock: Joi.number().required(),
});

module.exports = schema;
