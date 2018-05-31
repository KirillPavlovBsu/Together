import art from '../jsonOfMeals'

var nationalSort_NODE=document.querySelector('.nationalSort'),
    americanSort_NODE=document.querySelector('.americanSort'),
    asianSort_NODE=document.querySelector('.asianSort'),
    easternSort_NODE=document.querySelector('.easternSort'),
    italianSort_NODE=document.querySelector('.italianSort'),
    exoticSort_NODE=document.querySelector('.exoticSort') ,
    counter = 0;

nationalSort_NODE.addEventListener('click', function (){
    var filterarray = art.filter(function(dish){
    return dish.profile == 'National';
});
})
americanSort_NODE.addEventListener('click', function (){
    var filterarray = art.filter(function(dish){
    return dish.profile == 'American';
});
})
asianSort_NODE.addEventListener('click', function (){
    var filterarray = art.filter(function(dish){
    return dish.profile == 'Asian';
});
})
easternSort_NODE.addEventListener('click', function (){
    var filterarray = art.filter(function(dish){
    return dish.profile == 'East';
});
})
italianSort_NODE.addEventListener('click', function (){
    var filterarray = art.filter(function(dish){
    return dish.profile == 'Italian';
});
})
exoticSort_NODE.addEventListener('click', function (){
    var filterarray = art.filter(function(dish){
    return dish.profile == 'Exotic';
});
})
console.log('---','click')
export default filterarray