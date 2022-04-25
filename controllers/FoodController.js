const { customer, food, order } = require('../models');

class FoodController {
    static async getFoods(req, res) {
        try {
            const foods = await food.findAll({
                order: [
                    ['id', 'asc']
                ]
            });

            // res.json(foods);
            res.render('food/listFood.ejs', {foods})
            // res.render('food/listFood.ejs')


        } catch (err) {
            res.json(err);
        }
    }
    
    static createFoodPage(req,res) {
        res.render('food/createFoodPage.ejs');
    }

    static async create(req,res) {
        try {
            const { name, price, image } = req.body;

            const foods = await food.create({
                name, price, image
            })
            // res.json(foods);
            res.redirect('/foods')
        } 
        
        catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;

            const deleteFood = await food.destroy({
                where: {id}
            })

            // deleteFood === 1 ? 
            // res.json(`food with id ${id} has been deleted`) : 
            // res.json(`Something is wrong!`);
            res.redirect('/foods')
        }

        catch (err) {
            res.json(err);
        }
    }

    static async editFoodPage(req, res) {
        try {
            const findId = +req.params.id;
            const infoFood = await food.findOne({
                where : {
                    id: findId
                }
            })
            res.render('food/editFoodPage.ejs', {food : infoFood});    
            // infoFood === null ?
            // res.json(`can't find food with id ${findId}`) :
            // res.json(infoFood);
        }

        catch (err) {
            res.json(err);
        }     

    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            const { name, price, image } = req.body;

            const editedFood = await food.update({
                name, price, image
            }, {
                where: {id}
            })

            // editedFood[0] === 1 ?
            // res.json({message : `Food with id ${id} has been updated`}) : 
            // res.json(`Something is wrong!`);
            res.redirect('/foods')
        }   

        catch (err) {
            res.json(err);
        }
    }

    static async information(req, res) {
        try {
            const findId = +req.params.id;
            const infoFood = await food.findOne({
                where : {
                    id: findId
                }
            })

            infoFood === null ?
            res.json(`can't find food with id ${findId}`) :
            res.json(infoFood);
        }

        catch (err) {
            res.json(err);
        }
    }
}

module.exports = FoodController;