'use strict';

// App modules
const knex = require('../db');


class UIDAO {

    getMerchantsByDistance(perimeter, txn) {
        const conn = txn ? txn : knex;
        return conn.table('merchants').select('*')
            .where('latitude', '>=', perimeter.min_lat)
            .andWhere('latitude', '<=', perimeter.max_lat)
            .andWhere('longitude', '>=', perimeter.min_long)
            .andWhere('longitude', '<=', perimeter.max_long);
    }

}

module.exports = new UIDAO();