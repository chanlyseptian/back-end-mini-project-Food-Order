const { customer, food, order } = require('../models');

class CustomerController {
    static async getCustomers(req, res) {
        try {
            const customers = await customer.findAll({
                order: [
                    ['id', 'asc']
                ]
            });

            // res.json(customers);
            // res.render('customer/listCustomer.ejs', {customers})
            res.render('customer/listCustomer.ejs')

        } catch (err) {
            res.json(err);
        }
    }
    
    static createCustomerPage() {

    }

    static async create(req,res) {
        try {
            const { name, key, phone, address, image } = req.body;
            const customers = await customer.create({
                name, key, phone, address, image
            })
            res.json(customers);
        } 
        
        catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            const deleteCustomer = await customer.destroy({
                where: {id}
            })

            deleteCustomer === 1 ?
            res.json(`Customer with id ${id} has been deleted`) :
            res.json(`Something is wrong!`)
        }

        catch(err) {
            res.json(err);
        }
    }

    static editCustomerPage(req, res) {

    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            const { name, key, phone, address, image } = req.body;

            const editCustomer = await customer.update({
                name, key, phone, address, image
            }, {
                where: {id}
            })
            editCustomer[0] === 1 ? 
            res.json(`Customer with id ${id} has been updated`) :
            res.json(`Something is wrong!`)
        }

        catch (err) {
            res.json(err);
        }
    }

    static async information(req, res) {
        try {
            const findCustomerid = req.params.id;
            const infoCustomer = await customer.findOne({
                where: {
                    id: findCustomerid,
                }
            })
            res.json(infoCustomer)
        }

        catch (err) {
            res.json(err);
        }
    }

    static async costumerPage(req, res) {
        try {
            const { name, key } = req.body;
            const customerPage = await customer.findAll({
                where: {
                     name: name, 
                     key:key
                }       
            })
            res.json(customerPage);
        }
        catch (err) {
            res.json(err);
        }
    }

}

module.exports = CustomerController;