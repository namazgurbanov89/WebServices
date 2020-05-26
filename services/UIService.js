// Pulblic modules
const async = require('async');
const _ = require('lodash');

// App modules
const response = require('../utils/response');
const dao = require('../repositories/UIDAO');
const constants = require('../AppConstants');


class UIService {

    getMerchants(latitude, longitude, distance, fnCallback) {
        async.waterfall([
            // Validate the input
            (callback) => {
                if (latitude >= constants.MIN_LATITUDE && latitude <= constants.MAX_LATITUDE &&
                    longitude >= constants.MIN_LONGITUDE && longitude <= constants.MAX_LONGITUDE) {
                    return callback();
                }

                return callback(response.BAD_REQUEST('User location has to be provided'));
            },

            // Get all the merchants in the nearest proximity
            (callback) => {
                if (_.isNaN(distance)) {
                    distance = constants.SEARCH_RADIUS;
                }

                const perimeter = {
                    min_lat: latitude - (constants.LATITUDE_DEGREE_PER_MILE*distance),
                    max_lat: latitude + (constants.LATITUDE_DEGREE_PER_MILE*distance),
                    min_long: longitude - (constants.LONGITUDE_DEGREE_PER_MILE*distance),
                    max_long: longitude + (constants.LONGITUDE_DEGREE_PER_MILE*distance)
                };

                dao.getMerchantsByDistance(perimeter)
                    .then((merchants) => {
                        return callback(response.SUCCESS(`${merchants.length} merchants were found near you`, merchants));
                    })
                    .catch((error) => {
                        return callback(response.SERVER_ERROR('Unable to find merchants near your location'));
                    })
            }
        ], (result) => {
            return fnCallback(result);
        })
    }
}

module.exports = new UIService();