const { customer, food, order } = require('../models');

class OrderController {
    static async getOrders(req, res) {
        try {
            const orders = await order.findAll({
                // attributes: {
                //     include: ['id']
                // },
                include: [customer, food],
                order: [
                    ['id', 'asc']
                ]
            });

            // console.log(orders);
            res.json(orders);
            // res.render('admin/adminPage.ejs', {orders: orders})

        } catch (err) {
            res.json(err);
        }
    }
    
    static createOrderPage() {
    }

    static async create(req,res) {
        try {
            const { customerId, foodId, status } = req.body;
            const orders = await order.create({
                customerId: +customerId,
                foodId: +foodId, 
                status: 'pending'
            })
            // res.json(orders);
            res.redirect(`/orders/information/${customerId}`)
        } 
        
        catch (err) {
            res.json(err);
        }
    }

    static async editOrderPage(req, res) {
        try {
            const findId = +req.params.id;
            const infoOrder = await order.findOne({
                where : {
                    id: findId
                }, 
                include: [customer, food]
            })
            res.render('admin/editOrder.ejs', { order: infoOrder });
        }

        catch (err) {
            res.json(err);
        }

    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            const { customerId, foodId, status } = req.body;
            console.log(status);

            const editOrderStatus = await order.update({
                status: status
            }, {
                where: {id:id}
            })
            editOrderStatus[0] === 1 ? 
            res.json(`Order with id ${id} has been updated`) :
            res.json(`Something is wrong!`)
            // res.redirect('/admin')
        }

        catch (err) {
            res.json(err);
        }
    }

    static async information(req, res) {
        try {
            const findId = +req.params.id;
            const infoOrder = await order.findAll({
                where : {
                    customerId: findId
                },
                include: [customer, food],
                attributes: {
                    include: ['id']
                },
                order: [
                    ['updatedAt', 'desc']
                ]
            })
            
            // infoOrder === null ?
            // res.json(`can't find order with id ${findId}`) :
            // res.json(infoOrder);
            res.render('customer/customerOrder.ejs', {orders : infoOrder})
        }

        catch (err) {
            res.json(err);
        }
    }

    
    static async delete(req, res) {
        try {
            const findId = +req.params.id;
            const deleteOrder = await order.destroy({
                where : {
                    id: findId
                }
            })
            // deleteOrder === 1 ?
            // res.json(`Order with id ${findId} has been deleted`) :
            // res.json(`Something is wrong!`)
            res.redirect('/admin')
        }

        catch (err) {
            res.json(err);
        }
    }

    static async deleteOrder(req, res) {
        try {
            
            const findId = +req.params.id;
            const infoOrder = await order.findOne({
                where : {
                    id: findId
                },
                include: [customer, food]
            })
         
            const deleteOrder = await order.destroy({
                where : {
                    id: findId
                }
            })
            // deleteOrder === 1 ?
            // res.json(`Order with id ${findId} has been deleted`) :
            // res.json(`Something is wrong!`)
            res.redirect(`/orders/information/${infoOrder.customer.id}`)
        }

        catch (err) {
            res.json(err);
        }
    }

    static async orderFood(req, res) {
        
        const id = +req.params.id;
        
        res.render('customer/customerOrderFood.ejs', {id});
    }
}

module.exports = OrderController;