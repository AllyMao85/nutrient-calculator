module.exports = function(app){
    const Ingredients_routes = require('./routes/Ingredients_routes');
    const users = require('./routes/users');
    const recipes_routes = require('./routes/Recipes_routes');

    app.use('/', recipes_routes);
    app.use('/users',users);
    app.use('/ingredients', Ingredients_routes);
    console.log('routes.js works');
//other routes..

}