const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message : `Food Order Management System`
    })
})

const customerRoutes = require('./customer');
const foodRoutes = require('./food');
const orderRoutes = require('./order');


route.use('/customers', customerRoutes);
route.use('/foods', foodRoutes);
route.use('/orders', orderRoutes);


module.exports = route;