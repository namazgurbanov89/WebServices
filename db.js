const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'USER',
      password : 'PASSWORD',
      database : 'FoodTruck'
    }
});

module.exports = knex;