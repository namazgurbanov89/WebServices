// Pulblic modules
const async = require('async');
const _ = require('lodash');

// App modules
const response = require('../utils/response');
const MerchantFieldFilter = require('../utils/MerchantFieldFilter');
const dao = require('../repositories/CronDAO');


class CronService {

    addMerchants(merchants, fnCallback) {
        async.waterfall([
            // Validate the input
            (callback) => {
                if (!_.isArray(merchants)) {
                    return callback(response.BAD_REQUEST('List of merchants have to be provided'));
                }

                return callback();
            },
            // Select the fields for each merchant and name them appropriate to the merchant table column names
            (callback) => {
                merchants = merchants.map((merchant) => {
                    return MerchantFieldFilter(merchant);
                });

                return callback(null, merchants);
            },
            // Add all the merchants to the merchants table
            (merchants, callback) => {
                dao.insertMerchants(merchants)
                    .then((result) => {
                        return callback(response.SUCCESS('Merchants were added to database'));
                    })
                    .catch((error) => {
                        return callback(response.SERVER_ERROR('Unable to add merchant to database'));
                    })
            }
        ], (result) => {
            return fnCallback(result);
        })
    }

    updateMerchant(merchant, fnCallback) {
        async.waterfall([
            // Validate the input
            (callback) => {
                if (!_.isEmpty(merchant)) {
                    return callback(response.BAD_REQUEST('Merchant information has to be provided'));
                }

                return callback();
            },
            // Update the merchant in the merchants table
            (callback) => {
                const merchant = MerchantFieldFilter(merchant);

                dao.updateMerchant(merchant)
                    .then((result) => {
                        if (result) {
                            return callback(response.SUCCESS('Merchant information has been updated'));
                        } else {
                            return callback(response.BAD_REQUEST('Merchant was not found'));
                        }
                    })
                    .catch((error) => {
                        return callback(response.SERVER_ERROR('Unable to update the merchant info'));
                    })
            }
        ], (result) => {
            return fnCallback(result);
        })
    }
}

module.exports = new CronService();