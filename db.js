const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'HOST_WITH_REMOTE_ACCESS',
      user : 'USER',
      password : 'PASSWORD',
      database : 'FoodTruck'
    }
});

module.exports = knex;