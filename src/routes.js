const express = require("express");

const routes = express.Router();

const SvgController = require("./controllers/SvgController");

routes.get("/svgs", SvgController.index);

module.exports = routes;
