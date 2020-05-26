// Public Modules
const express = require('express');
const router = express.Router();

// App Modules
const uiService = require('../services/UIService');

/**
 * This route will return the merchants that are in 
 * the closest proximity to the requested location 
 */
router.get('/merchants', (req, res) => {
    const latitude = parseFloat(req.query.latitude);
    const longitude = parseFloat(req.query.longitude);
    const distance = parseFloat(req.query.distance);
    console.log(latitude);
    console.log(longitude);
    console.log(distance);
    uiService.getMerchants(latitude, longitude, distance, (result) => {
        res.status(result.code).json({message: result.msg, data: result.data});
    })
});


module.exports = router;
