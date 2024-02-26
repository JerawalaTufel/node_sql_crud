const apiRoute = require('./v1');

const Router = require('express').Router();

Router.use(apiRoute)
module.exports = Router;