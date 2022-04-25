const { customer, food, order } = require('../models');

class AdminController {
    static AdminPage(req,res) {
        res.render('admin/adminPage.ejs')
    }

}

module.exports = AdminController;