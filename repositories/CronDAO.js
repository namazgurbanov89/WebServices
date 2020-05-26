'use strict';

// App modules
const knex = require('../db');


class CronDAO {

    insertMerchants(merchants, txn) {
        const conn = txn ? txn : knex;
        return conn.table('merchants').insert(merchants);
    }

    updateMerchant(merchant) {
        const conn = txn ? txn : knex;
        return conn.table('merchants').update(merchant).where({id : merchant.id});
    }
}

module.exports = new CronDAO();