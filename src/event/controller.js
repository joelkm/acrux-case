const { BadRequestError } = require('../errors/app-error');
const model = require('./model')

module.exports = {
    getEvents: async (req, res, next) => {
        try {
            const events = await model.getBy()
            return res.status(200).json({ data: events });
        } catch (error) {
            next(error);
        }
    },
    getEventsByDate: async (req, res, next) => {
        try {
            const date = req.params.value
            if (!date) throw new BadRequestError("No date provided")
            const events = await model.getBy("date", date)
            return res.status(200).json({ data: events })
        } catch (error) {
            next(error)
        }
    },
    getEventsByLocation: async (req, res, next) => {
        try {
            const location = req.params.value
            if (!location) throw new BadRequestError("No location provided")
            const events = await model.getBy("location", location)
            return res.status(200).json({ data: events })
        } catch (error) {
            next(error)
        }
    },
    createEvent: async (req, res, next) => {
        try {
            let eventInfo = req.body;
            eventInfo = await model.new(eventInfo);
            return res.status(201).json({ data: eventInfo })
        } catch (error) {
            next(error)
        }
    }
}