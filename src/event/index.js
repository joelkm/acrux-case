const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.getEvents);

router.get("/date/:value", controller.getEventsByDate);

router.get("/location/:value", controller.getEventsByLocation);

router.post("/", controller.createEvent);

module.exports = router;