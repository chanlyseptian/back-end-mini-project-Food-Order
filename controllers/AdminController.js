const { customer, food, order } = require('../models');

class AdminController {
    static AdminPage(req,res) {
        res.render('food/foodPage.ejs')
    }

}

module.exports = AdminController;