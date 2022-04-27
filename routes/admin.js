const adminRoute = require('express').Router();
const { AdminController } = require('../controllers');

adminRoute.get('/', AdminController.AdminPage);

adminRoute.get('/edit/:id', AdminController.editOrderPage);
adminRoute.post('/edit/:id', AdminController.edit);



module.exports = adminRoute;