const router = require("express").Router();
const controller = require("./controller");

const validateRequest = require("./validation/validate-event");
const { eventValidationSchema } = require("./validation/event-schema");

router.get("/", controller.getEvents);

router.get("/date/:value", controller.getEventsByDate);

router.get("/location/:value", controller.getEventsByLocation);

router.post("/",
    validateRequest(eventValidationSchema),
    controller.createEvent);

module.exports = router;