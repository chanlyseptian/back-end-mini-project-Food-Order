const customerRoute = require('express').Router();
const { CustomerController } = require('../controllers');


customerRoute.get('/', CustomerController.getCustomers);

customerRoute.get('/create', CustomerController.createCustomerPage);
customerRoute.post('/create', CustomerController.create);

customerRoute.get('/delete/:id', CustomerController.delete);

customerRoute.get('/edit/:id', CustomerController.editCustomerPage);
customerRoute.post('/edit/:id', CustomerController.edit);

customerRoute.get('/information/:id', CustomerController.information);

customerRoute.get('/customerPage', CustomerController.costumerPage);


module.exports = customerRoute;
