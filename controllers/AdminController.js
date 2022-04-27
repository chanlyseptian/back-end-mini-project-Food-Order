const { customer, food, order } = require('../models');

class AdminController {
    static async AdminPage(req,res) {

        try {
            const orders = await order.findAll({
                attributes: {
                    include: ['id']
                },
                include: [customer, food],
                order: [
                    ['updatedAt', 'desc']
                ]
                
            });

            // console.log(orders);
            // res.json(orders);
            res.render('admin/adminPage.ejs', {orders: orders})

        } catch (err) {
            res.json(err);
        }

        // res.render('admin/adminPage.ejs')
    }

    static async editOrderPage(req, res) {
        try {
            const findId = +req.params.id;
            const infoOrder = await order.findOne({
                where : {
                    id: findId
                }, 
                include: [customer, food],
                attributes: {
                    include: ['id']
                }
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
            // editOrderStatus[0] === 1 ? 
            // res.json(`Order with id ${id} has been updated`) :
            // res.json(`Something is wrong!`)
            res.redirect('/admin')
        }

        catch (err) {
            res.json(err);
        }
    }

}

module.exports = AdminController;