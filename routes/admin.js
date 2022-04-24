const adminRoute = require('express').Router();
const { AdminController } = require('../controllers');

adminRoute.get('/', AdminController.AdminPage);

module.exports = adminRoute;