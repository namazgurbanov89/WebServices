// Public Modules
const express = require('express');
const router = express.Router();

// App Modules
const cronService = require('../services/CronService');

/**
 * This route will populate the merchants table 
 * with merchants provided in the request. 
 */
router.post('/merchant', (req, res) => {
    const merchants = req.body.merchants;

    cronService.addMerchants(merchants, (result) => {
        res.status(result.code).json(result.msg);
    })
});

/**
 * This route will update the existing merchant in 
 * the merchants table with merchant provided in the request. 
 */
router.put('/merchant', (req, res) => {
    const merchant = req.body.merchant;

    cronService.updateMerchant(merchant, (result) => {
        res.status(result.code).json(result.msg);
    })
});

module.exports = router;
