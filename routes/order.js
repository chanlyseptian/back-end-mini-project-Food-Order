const orderRoute = require('express').Router();
const { OrderController } = require('../controllers');


orderRoute.get('/', OrderController.getOrders);

orderRoute.get('/create', OrderController.createOrderPage);
orderRoute.post('/create', OrderController.create);

orderRoute.get('/delete/:id', OrderController.delete);

orderRoute.get('/edit/:id', OrderController.editOrderPage);
orderRoute.post('/edit/:id', OrderController.edit);

orderRoute.get('/information/:id', OrderController.information);

orderRoute.get('/order/:id', OrderController.orderFood);

orderRoute.get('/deleteOrder/:id', OrderController.deleteOrder);

module.exports = orderRoute;
