import art from '../jsonOfMeals'

var filterarray = art.filter(function(dish){
    return dish.comments > 30 && dish.comments < 70 && dish.meal == 'Sushi';
});

export default filterarray