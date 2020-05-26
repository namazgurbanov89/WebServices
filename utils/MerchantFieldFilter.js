'use strict';

const MerchantFieldFilter = (merchant) => {
    return {
        id: merchant.id,
        applicant: merchant.Applicant,
        facilityType: merchant.FacilityType,
        cnn: merchant.cnn,
        locationDesc: merchant.LocationDescription,
        address: merchant.Address,
        status: merchant.Status,
        foodItems: merchant.FoodItems,
        latitude: merchant.Latitude,
        longitude: merchant.Longitude
    }
}

module.exports = MerchantFieldFilter;