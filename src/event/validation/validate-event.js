const Joi = require("joi");
const {ValidationError} = require("../../errors/app-error");

const validateRequest = (schema) => (req, res, next) => {
  const {value, error} = Joi.compile(schema)
      .validate(req.body, {abortEarly: false});

  if (error) {
    return next(new ValidationError(error));
  }

  Object.assign(req, value);
  return next();
};


module.exports = validateRequest;