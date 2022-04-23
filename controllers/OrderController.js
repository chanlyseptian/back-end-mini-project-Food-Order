const { customer, food, order } = require('../models');

class OrderController {
    static async getOrders(req, res) {
        try {
            const orders = await order.findAll({
                include: [customer, food],
                order: [
                    ['id', 'asc']
                ]
            });

            res.json(orders);

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
                customerId: +customerId ,
                foodId: +foodId, 
                status
            })
            res.json(orders);
        } 
        
        catch (err) {
            res.json(err);
        }
    }

    static editOrderPage(req, res) {

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
        }

        catch (err) {
            res.json(err);
        }
    }

    static async information(req, res) {
        try {
            const findId = +req.params.id;
            const infoOrder = await order.findOne({
                where : {
                    id: findId
                }
            })

            infoOrder === null ?
            res.json(`can't find order with id ${findId}`) :
            res.json(infoOrder);
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
            deleteOrder === 1 ?
            res.json(`Order with id ${findId} has been deleted`) :
            res.json(`Something is wrong!`)
        }

        catch (err) {
            res.json(err);
        }
    }
}

module.exports = OrderController;