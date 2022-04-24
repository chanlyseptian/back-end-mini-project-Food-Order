const route = require('express').Router();

route.get('/', (req, res) => {
    // res.json({
    //     message : `Food Order Management System`
    // })
    res.render('index.ejs')
})

const customerRoutes = require('./customer');
const foodRoutes = require('./food');
const orderRoutes = require('./order');
const adminRoutes = require('./admin');


route.use('/customers', customerRoutes);
route.use('/foods', foodRoutes);
route.use('/orders', orderRoutes);
route.use('/admin', adminRoutes);


module.exports = route;