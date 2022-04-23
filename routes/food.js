const foodRoute = require('express').Router();
const { FoodController } = require('../controllers');


foodRoute.get('/', FoodController.getFoods);

foodRoute.get('/create', FoodController.createFoodPage);
foodRoute.post('/create', FoodController.create);

foodRoute.get('/delete/:id', FoodController.delete);

foodRoute.get('/edit/:id', FoodController.editFoodPage);
foodRoute.post('/edit/:id', FoodController.edit);

foodRoute.get('/information/:id', FoodController.information);


module.exports = foodRoute;
