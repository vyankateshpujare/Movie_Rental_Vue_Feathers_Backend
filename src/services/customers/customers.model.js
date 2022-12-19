const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  phone: Joi.string().required().min(7).max(10),
});
module.exports = schema;
