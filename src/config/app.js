const express = require("express");
const handleError = require('../errors/error-handler');
const { NotFoundError } = require('../errors/app-error');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/event", require("../event"));

app.use("*", (req, res, next) => {
  next(new NotFoundError(`Could not handle ${req.method} request in '${req.protocol + '://' + req.get('host') + req.originalUrl}'`));
});
app.use((err, req, res, next) => {
  handleError(err, req, res);
});

module.exports = app;
