const route = require('express').Router();
const { customer, food, order } = require('../models');


route.get('/', (req, res) => {

    food.findAll({
        order: [
            ['id', 'asc']
        ]
    })
    .then(result=> {
        res.render('index.ejs', {foods : result})
    })
    .catch(err => res.send(err));

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