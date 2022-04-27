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
            res.render('customer/listCustomer.ejs', {customers})
            // res.render('customer/listCustomer.ejs')

        } catch (err) {
            res.json(err);
        }
    }
    
    static createCustomerPage(req, res) {
        res.render('customer/createCustomerPage.ejs');
    }

    static async create(req,res) {
        try {
            const { name, key, phone, address, image } = req.body;
            const customers = await customer.create({
                name, key, phone, address, image
            })
            // res.json(customers);
            res.redirect('/customers');
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

            const deleteOrder = await order.destroy({
                where: {customerId: id}
            })

            // deleteCustomer === 1 ?
            // res.json(`Customer with id ${id} has been deleted`) :
            // res.json(`Something is wrong!`)
            res.redirect('/customers');
        }

        catch(err) {
            res.json(err);
        }
    }

    static async editCustomerPage(req, res) {
        try {
            const findCustomerid = req.params.id;
            const infoCustomer = await customer.findOne({
                where: {
                    id: findCustomerid,
                }
            })
            res.render('customer/editCustomerPage.ejs', {customer : infoCustomer});

        }

        catch (err) {
            res.json(err);
        }

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
            // editCustomer[0] === 1 ? 
            // res.json(`Customer with id ${id} has been updated`) :
            // res.json(`Something is wrong!`)
            res.redirect('/customers')
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
            // res.json(infoCustomer)
            res.redirect(`/customers/customerPage?name=${infoCustomer.name}&key=${infoCustomer.key}`);
            
        }

        catch (err) {
            res.json(err);
        }
    }

    static async costumerPage(req, res) {
        try {
            const { name, key } = req.query;
           
            const customerPage = await customer.findOne({
                where: {
                     name: name, 
                     key:key
                }       
            })
            // res.json(customerPage);
            res.render('customer/customerPage.ejs' , {customer : customerPage});
        }
        catch (err) {
            res.json(err);
        }
    }

    static loginPage(req, res) {
        res.render('customer/customerLoginForm.ejs');
    }

    static registerPage(req, res) {
        res.render('customer/customerRegisterForm.ejs');
    }

    static async register(req,res) {
        try {
            const { name, key, phone, address, image } = req.body;
            const customers = await customer.create({
                name, key, phone, address, image
            })
            // res.json(customers);
            res.redirect('/customers/login');
        } 
        
        catch (err) {
            res.json(err);
        }
    }

    static async editCustomerInformationPage(req,res) {
        try {
            const findCustomerid = req.params.id;
            const infoCustomer = await customer.findOne({
                where: {
                    id: findCustomerid,
                }
            })
            res.render('customer/customerPageEdit.ejs',  {customer : infoCustomer});


        }

        catch (err) {
            res.json(err);
        }
    }

    static async editCustomerInformation(req,res) {
        try {
            const id = +req.params.id;
            const { name, key, phone, address, image } = req.body;

            const editCustomer = await customer.update({
                name, key, phone, address, image
            }, {
                where: {id}
            })
            // editCustomer[0] === 1 ? 
            // res.json(`Customer with id ${id} has been updated`) :
            // res.json(`Something is wrong!`)
            // res.redirect(`/customers/editPage/${id}`)
            // res.redirect(`/customers/customerPage?name=${chanly%20septian&key=123`)
            res.redirect(`/customers/customerPage?name=${name}&key=${key}`);

        }

        catch (err) {
            res.json(err);
        }
    }
}

module.exports = CustomerController;