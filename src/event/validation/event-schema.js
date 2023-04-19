const Joi = require("joi").extend(require("@joi/date"));;

const eventValidationSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .required(),
    date: Joi.date()
        .format("YYYY-MM-DD")
        .required(),
    location: Joi.string()
        .min(3)
        .max(70)
        .required(),
})

module.exports = {
    eventValidationSchema
}