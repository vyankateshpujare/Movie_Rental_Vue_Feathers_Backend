const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required().min(3).max(20),
});

module.exports = schema;
