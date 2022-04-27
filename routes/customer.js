const customerRoute = require('express').Router();
const { CustomerController } = require('../controllers');


customerRoute.get('/', CustomerController.getCustomers);

customerRoute.get('/create', CustomerController.createCustomerPage);
customerRoute.post('/create', CustomerController.create);

customerRoute.get('/delete/:id', CustomerController.delete);

customerRoute.get('/edit/:id', CustomerController.editCustomerPage);
customerRoute.post('/edit/:id', CustomerController.edit);

customerRoute.get('/information/:id', CustomerController.information);

customerRoute.get('/customerPage', CustomerController.costumerPage); //show customer where name and key

customerRoute.get('/login', CustomerController.loginPage);

customerRoute.get('/register', CustomerController.registerPage);
customerRoute.post('/register', CustomerController.register);

customerRoute.get('/editPage/:id', CustomerController.editCustomerInformationPage);
customerRoute.post('/editPage/:id', CustomerController.editCustomerInformation);

module.exports = customerRoute;
