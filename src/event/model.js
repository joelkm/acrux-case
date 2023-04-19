const mongoose = require('mongoose');
const { AppError, NotFoundError } = require('../errors/app-error')

const eventSchema = new mongoose.Schema({
    email: String,
    password: String,
    loginTimestamp: Number
});

const eventsDb = mongoose.model('event', eventSchema)

module.exports = {
    new: async (eventInfo) => {
        eventInfo = await eventsDb.create({
            ...eventInfo
        });
        if(!eventInfo) throw new AppError("Event could not be created")
        return eventInfo
    },
    getBy: async (field, value) => {
        let events
        switch (field) {
            case 'date':
                events = await eventsDb.find({date: value});
                if(events == []) new NotFoundError("No events found");
                return events;
                break;
            case 'location':
                events = await eventsDb.find({location: value});
                if(events == []) new NotFoundError("No events found");
                return events;
                break;
            default:
                events = await eventsDb.find();
                if(events == []) new NotFoundError("No events found");
                return events;
                break;
        }
    }
}